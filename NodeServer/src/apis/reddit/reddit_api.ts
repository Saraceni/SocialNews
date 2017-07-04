import * as request from 'request';
import {RedditRootObject} from './reddit_search_result';

export interface ITokenResponse {
    token_type: string,
    access_token: string,
    expires_in: number,
    scope: string
}

export class RedditApi {

    private access_token: string;
    private redditApiKey: string;
    private redditApiSecret: string;

    public async init(redditApiKey: string, redditApiSecret: string): Promise<void> {
        this.redditApiKey = redditApiKey;
        this.redditApiSecret = redditApiSecret;
        let tokenResponse = await this.getAccessToken();
        this.access_token = tokenResponse.access_token;
    }

    public async getAccessToken(): Promise<ITokenResponse> {
        return new Promise<ITokenResponse>((resolve, reject) => {
            let basic_auth: string = 'Basic ' + new Buffer(this.redditApiKey + ':' + this.redditApiSecret).toString('base64');
            let options: request.Options = {
                url: 'https://www.reddit.com/api/v1/access_token',
                headers: { 'Authorization': basic_auth },
                form: { grant_type: 'client_credentials' }
            }
            request.post(options, (error, response, body) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(<ITokenResponse> JSON.parse(body));
                }
            });
        });
    }

    public async searchQuery(query: string): Promise<RedditRootObject> {
        
        return new Promise<RedditRootObject>((resolve, reject) => {
            let encodedQuery: string = encodeURIComponent(query);
            let url = 'https://www.reddit.com/search.json?q=' + encodedQuery;
            let options: request.Options = {
                url: url
            }
            request.get(options, (error, response, body) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(<RedditRootObject> JSON.parse(body));
                }
            });
        });
    } 

}