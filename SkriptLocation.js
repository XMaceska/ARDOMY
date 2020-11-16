window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'domy',
            location: {
                lat: 49.17193908,
                lng: 13.50755308,
            }
        },
    ];
}
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-projected-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model','./Domy.gltf');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1 1 1');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-projected-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}