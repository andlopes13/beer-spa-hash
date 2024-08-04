import homeController from './controller/homeController.js';
import aboutController from './controller/aboutController.js';
//import mapController from './controller/mapController.js';
import typeController from './controller/typeController.js';
import nationalitiesController from './controller/nationalitiesController.js';
import brandsController from './controller/brandController.js';

class Router {

    constructor() {
        this.routes = {
            '/': homeController,
            '/about': aboutController,
            '/map': mapController,
            '/types': typeController,
            '/nationalities': nationalitiesController,
            '/brands': brandsController,
        };
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        this.handleRouteChange();
    }

    async handleRouteChange() {
        const path = location.hash.slice(1) || '/';
        const controller = this.routes[path] || homeController;
        await controller();
    }
}

export default async function router(){

    const path = window.location.hash.replace('#', '') || '/';
    const route = routes[path];

    if(route){
        await route();
    }
}
