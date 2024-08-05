import typeView from '../view/typeView.js';
import BeerService from '../service/beerService.js';

async function typeController() {

    const data = await beerService.fetchTypes();
    document.getElementById('container').innerHTML = typeView(data);

    document.getElementById('reload-types-btn').addEventListener('click', async () => {

        const newData = await beerService.fetchTypes();

        document.getElementById('container').innerHTML = typeView(newData);

        document.getElementById('reload-types-btn').addEventListener('click', async () => {
            const refreshedData = await beerService.fetchTypes();
            document.getElementById('container').innerHTML = typeView(refreshedData);
        });
    });
}

export default { init };
