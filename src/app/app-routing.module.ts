import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListSearchComponent} from './components/list-search/list-search.component';


const routes: Routes = [
   { path: 'search/:text', component: ListSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
