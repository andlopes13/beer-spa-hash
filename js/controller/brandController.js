import brandView from '../view/brandView.js';
import BeerService from '../service/beerService.js';

function init(){
    brandView.render();
}

async function brandsController() {
    const beerService = new BeerService();
    const data = await beerService.fetchBrands();
    document.getElementById('container').innerHTML = brandView(data);
}

export default { init };
