import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html' 
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number = 0;
  @Output() heroeSeleccionado: EventEmitter<number>;
  

  constructor(private _router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.indice);
    // this._router.navigate(['/heroe',this.indice]);
    this.heroeSeleccionado.emit(this.indice);
  };

}
