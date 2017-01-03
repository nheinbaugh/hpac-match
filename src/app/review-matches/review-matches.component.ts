import { Component, OnInit } from '@angular/core';
import {ChoiceService} from '../shared/choice.service';
import {Pet} from '../models/pet';

@Component({
  selector: 'app-review-matches',
  templateUrl: './review-matches.component.html',
  styleUrls: ['./review-matches.component.scss']
})
export class ReviewMatchesComponent implements OnInit {

  private matches: Pet[] = [];
  constructor(private choiceService: ChoiceService) { }

  ngOnInit() {
    this.matches = this.choiceService.matches;
  }

}
