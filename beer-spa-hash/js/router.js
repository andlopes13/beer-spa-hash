import routes from '/js/routes.js';

async function launchController(controllerName) {
    console.log("launchin controller");
    const module = await import(`./controler/${controllerName}.js`);
    console.log(module);
    module.default.init();
}

function setCurrentPath({ path, controller }) {
    routes.currentPath.path = path;
    routes.currentPath.controller = controller;
    console.log("current path: ", routes.currentPath);
}

function navigate(path) {

    if (path === routes.currentPath.path) {
        return;
    }

    const routeKey = Object.keys(routes).find(key => routes[key].path === path);
    const route = routes[routeKey] || routes.home;

    console.log(route);

    setCurrentPath(route);
    launchController(route.controller);
}

function getPath(urlStr) {
    return new URL(urlStr).hash.slice(1);
}

function navigateOnHashChange() {
    addEventListener('hashchange', (e) => {
        const path = getPath(e.newURL);
        navigate(path);
    })
}

function init() {
    window.location.hash = window.location.hash || routes.home.path;
    console.log("hello again", window.location.hash);

    navigate(getPath(window.location.href));
    navigateOnHashChange();
}

export default { init };
