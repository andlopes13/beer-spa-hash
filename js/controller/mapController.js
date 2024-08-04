import mapView from '../view/mapView.js';

export default async function mapController() {
    document.getElementById('container').innerHTML = mapView();
}
