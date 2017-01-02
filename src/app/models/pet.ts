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
        if (!_.isEmpty(photos)) {
            this.photoLink = photos[0].$t;
        }
    }

}