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

  add(name:string){
    name = name.trim()
    if(!name){ return;}
    this.heroService.addHero({name} as Hero).subscribe((hero)=> this.heroes.push(hero))
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
