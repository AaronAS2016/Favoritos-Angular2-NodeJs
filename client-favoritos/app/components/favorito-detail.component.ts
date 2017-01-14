// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-detail',
    templateUrl: 'app/views/favoritos-detail.html'
})

// Clase del componente donde irán los datos y funcionalidades
export class FavoritoDetailComponent {


    constructor(){
    }
}