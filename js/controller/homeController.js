import homeView from '../view/homeView.js';

async function homeController() {
    document.getElementById('container').innerHTML = homeView();

    document.getElementById('welcome-btn').addEventListener('click', () => {
        alert('Welcome to the Beer SPA!');
    });
}

export default { init };