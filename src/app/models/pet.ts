let _ = require('lodash');

export class Pet {
    id: string;
    name: string;
    age: string;
    type: 'Cat' | 'Dog';
    breed: string;
    photoLink: string;
    sex: string;
    size: string;
    noDogsAllowed: boolean = false;
    noCatsAllowed: boolean = false;

    constructor(apiPet: any) {
        this.id = apiPet.id.$t;
        this.name = apiPet.name.$t;
        this.age = apiPet.age.$t;
        this.type = apiPet.animal.$t;
        this.breed = apiPet.breeds.breed.$t;
        this.sex = apiPet.sex.$t;
        this.size = apiPet.size.$t;

        let photos = _.filter(apiPet.media.photos.photo, p => {
            return (p['@size'] === 'pn' || p['@size'] === 'x')
        });
        let options = apiPet.options.option;

        let noCats = _.filter(options, (option) => {
            return option.$t === 'noCats';
        });
        let noDogs= _.filter(options, (option) => {
            return option.$t === 'noDogs';
        });
        if (_.isEmpty(noCats)) {
            this.noCatsAllowed = true;
        }
        if (_.isEmpty(noDogs)) {
            this.noDogsAllowed = true;
        }
        if (!_.isEmpty(photos)) {
            this.photoLink = photos[0].$t;
        }
    }

}