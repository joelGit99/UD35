import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  nombre : string | undefined;
  CIF : string | undefined;
  direccion : string | undefined;
  grupo : number | undefined;
  guardado : boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  guardadoTrue() : boolean {
    this.guardado = true;
    return this.guardado;
  }

}
