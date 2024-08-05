import beerService from '/js/service/beerService.js';
import beerView from '/js/view/beerView.js';

async function init() {
  const allBeers = await beerService.beers;
  console.log(allBeers);
  console.log(allBeers[0].name)

  beerView.render(allBeers);
};

export default { init };
