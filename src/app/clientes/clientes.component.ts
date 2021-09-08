import { Component, OnInit, Input } from '@angular/core';
import { AltaComponent } from '../alta/alta.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input() nombreCliente : string | undefined;
  @Input() CIFCliente : string | undefined;
  @Input() direccionCliente : string | undefined;
  @Input() grupoCliente : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
