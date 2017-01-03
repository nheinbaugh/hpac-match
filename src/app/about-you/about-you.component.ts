import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChoiceService} from '../shared/choice.service';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss']
})
export class AboutYouComponent implements OnInit {

  constructor(public choiceService: ChoiceService) { }

  ngOnInit() {
  }

  submitAndContinue(): void {
  }
}
