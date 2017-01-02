import { Component, OnInit } from '@angular/core';
import {AboutYouModel} from './about-you-model';
import {PetFinderService} from '../shared/pet-finder.service';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss']
})
export class AboutYouComponent implements OnInit {
  private aboutYouModel: AboutYouModel;

  constructor(private svc: PetFinderService) { }

  ngOnInit() {
    this.aboutYouModel = new AboutYouModel();
  }

  submitAndContinue(): void {
  }
}
