import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();
  }

}
