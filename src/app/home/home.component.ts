import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PetFinderService} from '../shared/pet-finder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public Router: Router, private svc: PetFinderService) { }

  ngOnInit() {
  }

  aboutYouNavigation(type: string): void {
    this.Router.navigate(['info', {typesOfAnimals: type}])
  }
}
