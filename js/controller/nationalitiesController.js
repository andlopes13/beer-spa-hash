import nationalitiesView from '../view/nationalitiesView.js';
import BeerService from '../service/beerService.js';

export default async function nationalitiesController() {
    const beerService = new BeerService();
    const data = await beerService.fetchNationalities();
    document.getElementById('container').innerHTML = nationalitiesView(data);
}
