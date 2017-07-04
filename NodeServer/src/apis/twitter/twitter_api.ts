import * as request from 'request';
import {SearchResult} from './twitter_search_result';

export interface ITokenResponse {
    token_type: string,
    access_token: string
}

export class TwitterAPI {

    private access_token: string;
    private twitterApiKey: string;
    private twitterApiSecret: string;

    public async init(twitterApiKey: string, twitterApiSecret: string): Promise<void> {
        this.twitterApiKey = twitterApiKey;
        this.twitterApiSecret = twitterApiSecret;
        let tokenResponse = await this.getAccessToken();
        this.access_token = tokenResponse.access_token;
    }

    public async getAccessToken(): Promise<ITokenResponse> {

        return new Promise<ITokenResponse>((resolve, reject) => {
            let basic_auth: string = 'Basic ' + new Buffer(this.twitterApiKey + ':' + this.twitterApiSecret).toString('base64');
            let options: request.Options = {
                url: 'https://api.twitter.com/oauth2/token',
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
    };

    public async searchQuery(query: string): Promise<SearchResult> {
        
        return new Promise<SearchResult>((resolve, reject) => {
            let encodedQuery: string = encodeURIComponent(query);
            let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + encodedQuery;
            let bearer_auth: string = 'Bearer ' + this.access_token;
            let options: request.Options = {
                url: url,
                headers: { 'Authorization': bearer_auth }
            }
            request.get(options, (error, response, body) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(<SearchResult> JSON.parse(body));
                }
            });
        });
    }

}
