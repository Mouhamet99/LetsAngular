import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
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
import { ConfigComponent } from './config/config.component';
import { ConfigService } from './config/config.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/heroes.service';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        GithubFollowersComponent,
        ConfigComponent,
        HeroesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
    ],
    providers: [
        PostsService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        DataService,
        GithubFollowersService,
        ConfigService,
        HeroService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
