import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  private paises: Pais[] = []

  constructor(private http: HttpClient) { }


  getPaises(): Promise<Pais[]> {

    if (this.paises.length > 0) {
      return Promise.resolve(this.paises);
    } else {
      return new Promise( resolve => {
        this.http.get<Pais[]>('https://restcountries.eu/rest/v2/lang/es')
        .subscribe( paises => {
          this.paises = paises;
          resolve(this.paises);
        });
      });
    }

  }


  getPais(id: string): Promise<Pais | undefined> {
   
    if (this.paises.length>0) {
      const pais = this.paises.find( pais => pais.alpha3Code === id ); 
      return Promise.resolve(pais);
    }

    return this.getPaises().then(paises => {
      const pais = this.paises.find( pais => pais.alpha3Code === id ); 
      return Promise.resolve(pais);
    });
  
  }


}
