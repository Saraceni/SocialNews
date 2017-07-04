import { Component, OnInit } from '@angular/core';
import { AllPostsService, QueryData } from '../services/all-posts.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

  posts: Observable<QueryData[]>;
  numberOfPosts: number = 0;
  error: boolean = false;
  isLoading: boolean = false;

  constructor(private postsService: AllPostsService) { }

  ngOnInit() {
    this.getPosts('Welcome');
  }

  getPosts(query: string) {
    this.error = false;
    this.isLoading = true;
    this.posts = this.postsService.search(query)
      .do((data) => this.numberOfPosts = data.length)
      .catch((err) => {
        this.error = true;
        return Observable.throw(err);
      }).finally(() => {
        this.isLoading = false;
      });
  }

}
