import typeView from '../view/typeView.js';
import BeerService from '../service/beerService.js';

export default async function typeController() {
    const beerService = new BeerService();
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
