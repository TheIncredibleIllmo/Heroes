import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchedHeroes: Heroe [];
  public searchedName: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.searchedName = params['name'];
      this.searchedHeroes = this.heroesService.searchHeroe(this.searchedName);
    });
  }

  public heroeSelected(index: number) {
    this.router.navigate(['/heroe', index]);
  }

}
