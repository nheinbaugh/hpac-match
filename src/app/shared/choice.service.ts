import {Injectable} from '@angular/core';
@Injectable()
export class ChoiceService {
    selectedAnimalType: string;
    hasDogs: boolean = false;
    hasCats: boolean = false;
    hasChickens: boolean = false;
    hasChildren: boolean = false;
}