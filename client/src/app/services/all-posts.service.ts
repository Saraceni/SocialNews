import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

export interface QueryData {
    source: number,
    img_url: string,
    author_name: string,
    title: string,
    description: string,
    post_url: string,
    date: Date
}

@Injectable()
export class AllPostsService {
    private apiUrl = config.api_url + '/all';

    constructor(private http: Http) { }

    private getRequestUrl(request: string): string {
        return this.apiUrl + '?q=' + encodeURI(request);
    }

    public search(query: string): Observable<QueryData[]> {
        console.log(query);
        return this.http.request(this.getRequestUrl(query))
            .map((res: Response) => <QueryData> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }
}