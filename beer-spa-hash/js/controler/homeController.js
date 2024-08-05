import homeView from '/js/view/homeView.js';
import beerService from '/js/service/beerService.js';

async function init() {

  try {
    console.log("Da home controller" + beerService.beers); // Help with code debugging
    const beer1 = await beerService.beers;
    homeView.render(beer1); // Render the beers in the DOM

  } catch(error) {
    console.error("Error fetching beers", error);
  }
};

export default { init };
