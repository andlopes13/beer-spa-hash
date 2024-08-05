import homeView from '/js/view/homeView.js';
import beerService from '/js/service/beerService.js';

async function init() {

  try {

    console.log("da home controller" + beerService.beers);

  
  const beer1 = await beerService.beers;
  homeView.render(beer1);

  } catch(error) {
    console.error("error fetching beers", error);

  }
};

export default { init };
