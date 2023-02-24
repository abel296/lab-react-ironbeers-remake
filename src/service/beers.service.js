export class BeerService {
    constructor() {
        this.baseUrl = "https://api.punkapi.com/v2"
    }

    getAllBeers = () => fetch(`${ this.baseUrl }/beers`)
    getRandomBeer = () => fetch(`${ this.baseUrl }/beers/random`)
}