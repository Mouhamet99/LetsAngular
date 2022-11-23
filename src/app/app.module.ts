import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { DataService } from './services/data.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers/github-followers.service';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        GithubFollowersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [PostsService, { provide: ErrorHandler, useClass: AppErrorHandler }, DataService, GithubFollowersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
