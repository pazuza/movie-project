import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/marvels-movies',
    pathMatch: 'full'
  },
  {
    path: 'marvels-movies',
    component: MoviesComponent,
    pathMatch: 'full',
  },
  {
    path: 'interface-web',
    component: InterfaceComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
