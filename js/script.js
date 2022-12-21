let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let outputElement = document.querySelector(".js-output");
let valueElement = document.querySelector(".js-value");

let EUR = 4.65;
let USD = 4.38;
let GPB = 5.34;
let CHF = 4.73;
let NOK = 0.44;

formElement.addEventListener("input", () => {

    let input = inputElement.value;
    let value = valueElement.value;
    let output;

    switch (value) {
        case "EUR":
            output = input / EUR;
            break;

        case "USD":
            output = input / USD;
            break;

        case "GPB":
            output = input / GPB;
            break;

        case "CHF":
            output = input / CHF;
            break;

        case "NOK":
            output = input / NOK;
            break;
    }

    outputElement.innerHTML = output.toFixed(2)

});