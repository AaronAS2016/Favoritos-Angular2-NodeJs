// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FavoritoService} from '../services/favorito.services';
import {Favorito} from  '../models/favorito';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-add',
    templateUrl: 'app/views/favorito-add.html'

})

// Clase del componente donde irán los datos y funcionalidades
export class FavoritoAddComponent implements OnInit{

    public  title_section: string;
    public favorito: Favorito;

    constructor(){
        this.title_section = 'Crear favorito'
    }
    ngOnInit() {
        this.favorito = new Favorito("", "","");

    }
    onSubmit(){
        console.log(this.favorito);
    }
}