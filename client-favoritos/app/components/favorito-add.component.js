"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar Component desde el núcleo de Angular
var core_1 = require("@angular/core");
var favorito_1 = require("../models/favorito");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var FavoritoAddComponent = (function () {
    function FavoritoAddComponent() {
        this.title_section = 'Crear favorito';
    }
    FavoritoAddComponent.prototype.ngOnInit = function () {
        this.favorito = new favorito_1.Favorito("", "", "");
    };
    FavoritoAddComponent.prototype.onSubmit = function () {
        console.log(this.favorito);
    };
    return FavoritoAddComponent;
}());
FavoritoAddComponent = __decorate([
    core_1.Component({
        selector: 'favorito-add',
        templateUrl: 'app/views/favorito-add.html'
    }),
    __metadata("design:paramtypes", [])
], FavoritoAddComponent);
exports.FavoritoAddComponent = FavoritoAddComponent;
//# sourceMappingURL=favorito-add.component.js.map