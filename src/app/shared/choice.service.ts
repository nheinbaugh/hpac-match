import {Injectable} from '@angular/core';
import {Pet} from '../models/pet';
@Injectable()
export class ChoiceService {
    selectedAnimalType: string;
    hasDogs: boolean = false;
    hasCats: boolean = false;
    hasChickens: boolean = false;
    hasChildren: boolean = false;

    public matches: Pet[] = [];
}