import { Request, Response } from 'express';
import { RedditApi } from '../apis/reddit/reddit_api';
import { TwitterAPI } from '../apis/twitter/twitter_api';
import { ImgurApi } from '../apis/imgur/imgur_api';
import {RedditRootObject} from '../apis/reddit/reddit_search_result';
import {SearchResult} from '../apis/twitter/twitter_search_result';
import {ImgurRootObject} from '../apis/imgur/imgur_search_result';
import constants from '../const';
import {shuffleArray} from '../utils';
import config from '../config';

interface QueryData {
    source: number,
    img_url: string,
    author_name: string,
    title: string,
    description: string,
    post_url: string,
    date: Date
}

class AllSourcesApiController {

    private reddit: RedditApi;
    private twitter: TwitterAPI;
    private imgur: ImgurApi;

    constructor() {
        this.initTwitterApi();
        this.initRedditApi();
        this.initImgurApi();
    }

    private initTwitterApi(): void {
        this.twitter = new TwitterAPI();
        this.twitter.init(config.TwitterAPIKey, config.TwitterAPISecret).then(() => {
            console.log('Twitter token received');
        }).catch((err) => {
            console.log('Err on twitter token fetch');
            console.log(err);
        });
    }

    private initRedditApi(): void {
        this.reddit = new RedditApi();
        // For future development
        /*this.reddit.init(config.RedditAPIKey, config.RedditAPISecret).then(() => {
            console.log('Reddit token received');
        }).catch((err) => {
            console.log('Err on reddit token fetch');
            console.log(err);
        });*/
    }

    private initImgurApi(): void {
        this.imgur = new ImgurApi(config.ImgurAPIKey);
    }

    public search(req: Request, res: Response) {
        let query: string = req.query.q;
        if (query) {
            Promise.all([this.twitter.searchQuery(query), 
                this.reddit.searchQuery(query),
                this.imgur.searchQuery(query)])
                .then((data) => {
                    let twitterData = this.mapTwitterData(data[0]);
                    let redditData = this.mapRedditData(data[1]);
                    let imgurData = this.mapImgurData(data[2]);
                    let resultData = twitterData.concat(redditData).concat(imgurData); 
                    shuffleArray(resultData);
                    res.send(resultData);
                }).catch((err) => {
                    res.status(500).send(err);
                    console.log(err);
                });
        } else {
            res.status(400).send({
                "err": "no query parameter"
            });
        }
    }

    private mapRedditData(redditData: RedditRootObject): Array<QueryData> {
        let result: Array<QueryData> = [];
        let queryData: QueryData;
        for(let redditPost of redditData.data.children) {
            let date = new Date(0);
            date.setUTCSeconds(redditPost.data.created_utc);
            queryData = {
                source: constants.source.reddit,
                img_url: redditPost.data.preview ? redditPost.data.preview.images[0].source.url : null,
                author_name: redditPost.data.author,
                title: redditPost.data.title,
                description: redditPost.data.selftext,
                post_url: redditPost.data.url,
                date: date
            }
            result.push(queryData);
        }
        return result;
    }

    private mapTwitterData(twitterData: SearchResult): Array<QueryData> {
        let result: Array<QueryData> = [];
        let queryData: QueryData;
        for(let twitterPost of twitterData.statuses) {
            queryData = {
                source: constants.source.twitter,
                img_url: twitterPost.user.profile_image_url,
                author_name: twitterPost.user.screen_name,
                title: null,
                description: twitterPost.text,
                post_url: 'https://twitter.com/i/web/status/' + twitterPost.id_str,
                date: new Date(twitterPost.created_at)
            }
            result.push(queryData);
        }
        return result;
    }

    private mapImgurData(imgurData: ImgurRootObject): Array<QueryData> {
        let result: Array<QueryData> = [];
        let queryData: QueryData;
        for(let imgurPost of imgurData.data) {
            let date = new Date(0);
            date.setUTCSeconds(imgurPost.datetime);
            queryData = {
                source: constants.source.imgur,
                img_url: imgurPost.is_album ? null : imgurPost.link,
                author_name: imgurPost.account_url,
                title: imgurPost.title,
                description: null,
                post_url: imgurPost.link,
                date: date
            }
            result.push(queryData);
        }
        return result;
    }

}

export default AllSourcesApiController;