import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { MatchComponent } from './match/match.component';
import { AboutComponent } from './shared/about/about.component';
import { ReviewMatchesComponent } from './review-matches/review-matches.component';
import { HomeComponent } from './home/home.component';
import {PetFinderService} from './shared/pet-finder.service';
import {ChoiceService} from './shared/choice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AboutYouComponent,
    MatchComponent,
    AboutComponent,
    ReviewMatchesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    PetFinderService,
    ChoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
