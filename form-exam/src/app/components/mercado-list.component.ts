import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
//import {Album} from '../models/album'
import { SearchService } from '../services/search.service'
import { SpinnerService } from 'angular-spinners';

@Component({
    selector: 'search-list',
    templateUrl: '../views/mercado-list.html',
    providers: [SearchService],
})

export class MercadoListComponent implements OnInit {
    public titulo: string
    public results: any
    public errMessage: any
    public model:{
        tosearch:string
    }
    constructor(
        private _route: ActivatedRoute,
        private _roiter: Router,
        private _searchService: SearchService,
    ) {
        this.titulo = 'Mercado Libre API'

    }
    ngOnInit() {
        console.log('search-list.component.ts cargado');
    }
    getSearch(prod:string) {
        this._searchService.getMercadoLibre(prod).subscribe(
            result => {
                this.results = result.results
                console.log(result.results);
                if (!this.results) {
                    console.log('Error en el servidor');
                }
            }, err => {
                this.errMessage = <any>err
                if (this.errMessage != null) {
                    console.log(this.errMessage);
                }
            }
        )
    }
    search(){

        this._searchService.searchProduct().subscribe(
            result => {
                this.results = result
                console.log(result);
                if (!this.results) {
                    console.log('Error en el servidor');
                }
            }, err => {
                this.errMessage = <any>err
                if (this.errMessage != null) {
                    console.log(this.errMessage);
                }
            }
        )
    }

}