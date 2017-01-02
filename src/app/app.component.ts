import {Component, OnInit} from '@angular/core';
import {PetFinderService} from './shared/pet-finder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private svc: PetFinderService){

  }
  public ngOnInit(): void {
    this.svc.getHpacAnimals();
  }
  title = 'app works!';
}
