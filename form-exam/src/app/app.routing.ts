import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

import {SearchListComponent} from './components/search-list.component'
import {MercadoListComponent} from './components/mercado-list.component'
const appRoutes:Routes=[
    {path:'beer',component:SearchListComponent },
    {path:'mercado',component:MercadoListComponent },
    {path:'**',component:SearchListComponent}
]
export const appRoutingProviders:any[]=[]
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes)