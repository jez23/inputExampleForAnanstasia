import { addEventListeners } from './2.js';

const createHtML = () => {

    let priceDisplay = document.createElement('div');
    priceDisplay.id = 'priceDisplay'; 
    document.body.appendChild(priceDisplay);

    let priceInput = document.createElement('div');
    priceInput.id = 'priceInput'; 
    priceInput.innerHTML = '<label for="price-wrap">Price</label> <input type="number" name="price-wrap" id="price-wrap" class="input-price price_js"></input>';
    document.body.appendChild(priceInput);

    let errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage'; 
    document.body.appendChild(errorMessage);

    addEventListeners();
}

createHtML();