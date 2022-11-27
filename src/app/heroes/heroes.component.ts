import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?:Hero;
  heroes:Hero[] =[];

  constructor(private messageService: MessageService,private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`hero ${hero.name} selected`)
  }

}
