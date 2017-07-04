import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsViewerComponent } from './posts-viewer/posts-viewer.component';
import { AllPostsService } from './services/all-posts.service';

@NgModule({
  declarations: [
    AppComponent,
    InputFilterComponent,
    PostsViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [AllPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
