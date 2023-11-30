import { Routes } from '@angular/router';
import { ListComponent } from './domains/productos/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: 'home'}
];
