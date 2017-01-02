import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './shared/about/about.component';
import {HomeComponent} from './home/home.component';
import {AboutYouComponent} from './about-you/about-you.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'info', component: AboutYouComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
