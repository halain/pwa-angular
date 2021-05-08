import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  pais!: Pais;

  constructor(private paiseService: PaisesService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      
      this.paiseService.getPais(id).then( pais => {
        if (!pais) {
          return this.router.navigate(['/']);
        }
        this.pais = pais; 
      });

    }

  }

}
