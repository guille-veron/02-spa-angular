import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',  
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string = '';

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(params['termino']);      
    })
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe',i]);
  }

}
