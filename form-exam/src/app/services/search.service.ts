import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable.d'
//import {Album} from '../models/album'
//import {GLOBAL} from './global'

@Injectable()
export class SearchService {
    public url: string
    public headers = new Headers();

    constructor(
        private _http: Http
    ) {
    }

    getMercadoLibre(prod) {
        return this._http.get('https://api.mercadolibre.com/sites/MLM/search?q='+prod)
            .map(resp => resp.json())
    }
    searchProduct() {
        this.headers = new Headers({ 'Content-Type': 'application/json' ,'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE, PUT'});     
        return this._http.get('https://api.punkapi.com/v2/beers',{headers:this.headers})
            .map(resp => resp.json())
    }
}