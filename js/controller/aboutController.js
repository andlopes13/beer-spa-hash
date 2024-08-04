import aboutView from '../view/aboutView.js';

export default async function aboutController() {
    document.getElementById('container').innerHTML = aboutView();
}
