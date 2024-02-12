
import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = 'pk.eyJ1IjoibmlzaGExNyIsImEiOiJjbHMxY28waDIwODZuMmxxeDJwNHg4dmp1In0.MxkkysWK2xSJBaI6EzFIWw';
declare var ol: any;

type GeocodingResponse = {
    results: {geometry: {location: {lat: number; lng: number}}}[]
    status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enterAddress = addressInput.value;

    axios.get<GeocodingResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(
        enterAddress
    )}.json?access_token=${API_KEY}`
    )
    .then(response => {
        if (response.data.status !== 'OK') {
            throw new Error('not able to fetch location !!');
        }
        //const coordinates = response.data.results[0].geometry.location;
        
    })
    .catch(err => {
        alert(err.message);
        console.log(err);
    });
}


form.addEventListener('submit', searchAddressHandler);

