import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import {routing,appRoutingProviders} from './app.routing'

import {SearchListComponent} from './components/search-list.component'
import {MercadoListComponent} from './components/mercado-list.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    MercadoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
