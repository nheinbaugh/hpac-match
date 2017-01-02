import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {Pet} from '../models/pet';

let _ = require('lodash');

@Injectable()
export class PetFinderService {

    private baseUrl: string = 'http://api.petfinder.com/';
    private hpacId: string = 'WA109';
    private key: string = 'c34c4e1b4b872da0e17df1df0a2e85bd';
    private baseParams: URLSearchParams;
    private _pets: Pet[] = [];

    get Pets(): Observable<Pet> {
        return Observable.from(this._pets);
    }

    constructor(private jsonp: Jsonp) {
    }

    public getHpacAnimals(shelterId?: string): void {
        if (!this.baseParams) {
            this.baseParams = new URLSearchParams();
            this.baseParams.append('key', this.key);
            this.baseParams.append('callback', 'JSONP_CALLBACK');
            this.baseParams.append('format', 'json');
        }
        this.request(shelterId).subscribe((res) => {
        });
    }

    private request(shelterId?: string): Observable<any> {
        let id: string = shelterId ? shelterId : this.hpacId;
        let urlSearchParams: URLSearchParams = new URLSearchParams();
        urlSearchParams.appendAll(this.baseParams);
        urlSearchParams.append('id', id);

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('charset', 'utf-8');


        let urlString: string = this.baseUrl + 'shelter.getPets';
        return this.jsonp.request(urlString, {search: urlSearchParams, headers: headers})
            .map(res => {
                let json: any[] = res.json().petfinder.pets.pet;
                return _.map(json, (pet: any) => {
                    this._pets.push(new Pet(pet));
                })
            }, err => {
                console.log(err);
            })
    }
}
