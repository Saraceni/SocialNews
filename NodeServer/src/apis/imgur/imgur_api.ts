import * as request from 'request';
import {ImgurRootObject} from './imgur_search_result';

export class ImgurApi {

    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public async searchQuery(query: string): Promise<ImgurRootObject> {
        
        return new Promise<ImgurRootObject>((resolve, reject) => {
            let encodedQuery: string = encodeURIComponent(query);
            let url = 'https://api.imgur.com/3/gallery/search/top/all/0?q=' + encodedQuery;
            let options: request.Options = {
                url: url,
                headers: { 'Authorization': 'Client-ID ' + this.apiKey },
            }
            request.get(options, (error, response, body) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(<ImgurRootObject> JSON.parse(body));
                }
            });
        });
    } 

}