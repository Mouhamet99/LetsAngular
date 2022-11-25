import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heroes.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    providers: [HeroService],
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private service: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.service.getHeroes().subscribe({next:(heroes) => {
            this.heroes = [...heroes]
        }, error:error => {
            console.log({error});

        }});
    }

}
