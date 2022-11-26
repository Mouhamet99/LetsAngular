import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from './github-followers.service';

@Component({
    selector: 'github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
    followers: Follower[] = [];
    constructor(private githubFollowersService: GithubFollowersService) {}

    ngOnInit(): void {
        this.getFollowers();
    }

    getFollowers() {
        this.githubFollowersService.getAll().subscribe({
            next: (followers) => {
                this.followers = [...followers as Follower[]];
            },
            error: (error) => {
                if (error.status === 404) {
                    console.log("not found");
                }
            },
        });
    }
}

export interface Follower {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    url: string;
}
