import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });

   }

  ngOnInit() {
  }

}
