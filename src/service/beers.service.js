import axios from "axios"

export class BeerService {
    constructor() {
        this.baseUrl = "https://api.punkapi.com/v2"
    }

    getAllBeers = page => fetch(`${ this.baseUrl }/beers?page=${page}&per_page=80`)
    getRandomBeer = () => fetch(`${ this.baseUrl }/beers/random`)
    createNewBeer = body => axios.create().post('https://ih-beers-api2.herokuapp.com/beers/new', body)
}