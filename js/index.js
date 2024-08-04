import router from './router.js';
import Router from './router.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router();
    router.init();
});
