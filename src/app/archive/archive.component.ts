import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
    year: string = '';
    month: string = '';

    constructor( private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.month = this.route.snapshot.paramMap.get('month') as string
        this.year = this.route.snapshot.paramMap.get('year') as string
    }


}
