import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
   
  heroes:Heroe[]=[]
  constructor(private _herosService:HeroesService,
              private _router:Router) { }

  ngOnInit(): void {
    this.heroes = this._herosService.getHeroes();
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe',i]);
  }

}
