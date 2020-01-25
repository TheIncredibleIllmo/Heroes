import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHerores();

    console.log(this.heroes);
  }

  public heroeSelected(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
