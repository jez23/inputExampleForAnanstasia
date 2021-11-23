const createHtML = () => {
    priceInput.innerHTML = `<div><label for="price-wrap">Price</label> <input type="number" name="price-wrap" id="price-wrap" class="input-price price_js"></div>`;
    addEventListeners();
}

const addEventListeners = () => {

    const priceInput = document.querySelector('#priceInput');
    const priceDisplay = document.querySelector('#priceDisplay');
    const errorMessage = document.querySelector('#errorMessage');
    const priceWrap = document.querySelector('#price-wrap');

    priceInput.addEventListener('change', (e) => {
        if (e.target.value < 0) {
            priceWrap.style.border = '1px solid red';
            errorMessage.innerHTML = `Please enter correct price`;
            priceDisplay.innerHTML = "";
        } else {
            priceWrap.style.border = '1px solid black';
            priceDisplay.innerHTML = `<span id="currentPrice">Current price: ${e.target.value}</span><button id="removePrice">X</button>`;
            errorMessage.innerHTML = "";
        }
    })

    priceDisplay.addEventListener('click', (e) => {
        if (e.target.id === "removePrice") {
            priceWrap.value = "";
            priceDisplay.innerHTML = "";
        }
    })

    priceWrap.addEventListener('input', (e) => {
        if (e.target.value < 0) {
            priceWrap.style.color = 'red';
            priceWrap.style.outlineColor = "red";
        } else {
            priceWrap.style.color = 'green';
            priceWrap.style.outlineColor = "green";
        }
    })
}

createHtML();