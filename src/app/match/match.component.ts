import { Component, OnInit } from '@angular/core';
import {PetFinderService} from '../shared/pet-finder.service';
import {Pet} from '../models/pet';
import {ChoiceService} from '../shared/choice.service';
let _ = require('lodash');

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  public allPets: Pet[];
  private matchingPets: Pet[];
  private currentPet: Pet;
  private matches: Pet[] = [];
  constructor(private svc: PetFinderService, private choiceService: ChoiceService) { }

  ngOnInit() {
    this.svc.Pets.subscribe((pets: Pet[]) => {
      this.allPets = pets;
      this.selectPets(pets);
      this.getRandomPet();
    });
    if (!this.allPets) {
      this.allPets = this.svc._pets.getValue();
      this.selectPets(this.allPets);
      this.getRandomPet();
    }
  }

  private selectPets(pets: Pet[]){
    let remainingPets = pets;

    // pull out dogs (or cats) if the user selected only one
    if (this.choiceService.selectedAnimalType === 'Dog') {
      _.remove(remainingPets, (pet: Pet) => {
        return pet.type !== 'Dog';
      });
    } else if (this.choiceService.selectedAnimalType === 'Cat') {
      _.remove(remainingPets, (pet: Pet) => {
        return pet.type !== 'Cat';
      });
    }

    // pull out no dogs allowed
    if (this.choiceService.hasDogs) {
      _.remove(remainingPets, (pet: Pet) => {
        return pet.noDogsAllowed = true;
      })
    }
    // put out no cats
    if (this.choiceService.hasCats) {
      _.remove(remainingPets, (pet: Pet) => {
        return pet.noCatsAllowed = true;
      })
    }
    this.matchingPets = remainingPets;
  }

  private getRandomPet(): void {
    let index = Math.floor(Math.random() * this.matchingPets.length);
    this.currentPet = this.matchingPets[index];
    this.matchingPets.splice(index, 1);
  }
}
