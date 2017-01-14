import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { AppComponent }  from './app.component';
import  { appRoutingProviders, routing } from "./app.routing";
import { FavoritosListComponent } from './components/favoritos-list-component';
import { HttpModule, JsonpModule } from "@angular/http";
import { FavoritoDetailComponent } from './components/favorito-detail.component';

@NgModule({
    imports:      [
                    BrowserModule,
                    FormsModule,
                    HttpModule,
                    routing
    ],
    declarations: [
                    AppComponent,
                    FavoritosListComponent,
                    FavoritoDetailComponent
    ],
    providers:[appRoutingProviders],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }