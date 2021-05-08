import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];

  constructor(private _paisServices: PaisesService) { }

  ngOnInit(): void {
    this._paisServices.getPaises()
      .then( paises => this.paises = paises)
  }

}
