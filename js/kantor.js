let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let GBP = 5.22;
let EUR = 4.48;
let USD = 4.15;
let CHF = 4.62;

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

   switch (currency) {
    case "EUR":
        result = amount / EUR;
        break;
     case "USD":
        result = amount / USD;
        break;
    case "CHF":
        result = amount / CHF;
        break;
    case "GBP":
        result = amount / GBP;
        break;
    }

    resultElement.innerText = result.toFixed(2);
});
