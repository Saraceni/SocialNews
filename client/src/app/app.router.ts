import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsViewerComponent } from './posts-viewer/posts-viewer.component';

export const router: Routes = [
    { path: '', redirectTo: 'all-posts', pathMatch: 'full' },
    { path: 'all-posts', component: PostsViewerComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
