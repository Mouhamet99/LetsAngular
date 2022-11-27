import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Archive } from './archive';

@Component({
    selector: 'blog-archives',
    templateUrl: './blog-archives.component.html',
    styleUrls: ['./blog-archives.component.css']
})
export class BlogArchivesComponent implements OnInit {
    archives: Archive[] = [];

    constructor() { }

    ngOnInit(): void {
        this.archives = [
            { year: '2017', month: '1', },
            { year: '2019', month: '2', },
            { year: '2018', month: '3', }
        ];
    }

}
