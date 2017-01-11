import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { AppComponent }  from './app.component';
import { FavoritosListComponent } from './components/favoritos-list-component';
import { HttpModule, JsonpModule } from "@angular/http";

@NgModule({
    imports:      [
                    BrowserModule,
                    FormsModule,
                    HttpModule
    ],
    declarations: [
                    AppComponent,
                    FavoritosListComponent
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }