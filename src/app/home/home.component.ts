import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ChoiceService} from '../shared/choice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public Router: Router, private choiceSvc: ChoiceService) { }

  ngOnInit() {
  }

  aboutYouNavigation(type: string): void {
    this.choiceSvc.selectedAnimalType = type;
    this.Router.navigate(['info'])
  }
}
