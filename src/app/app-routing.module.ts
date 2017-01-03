import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './shared/about/about.component';
import {HomeComponent} from './home/home.component';
import {AboutYouComponent} from './about-you/about-you.component';
import {MatchComponent} from './match/match.component';
import {ReviewMatchesComponent} from './review-matches/review-matches.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'info', component: AboutYouComponent},
  {path: 'match', component:  MatchComponent},
  {path: 'reviewMatches', component:  ReviewMatchesComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
