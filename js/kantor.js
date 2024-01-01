

const calculateResult = (amount, currency) => {
    const GBP = 5.22;
    const EUR = 4.48;
    const USD = 4.15;
    const CHF = 4.62;    
switch (currency) {
    case "EUR":
        return amount / EUR;
    
     case "USD":
        return amount / USD;
        
    case "CHF":
        return amount / CHF;
        
    case "GBP":
        return amount / GBP;
        
    }}

const onFormSubmit = (event) => {
        event.preventDefault(); 
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        let result = calculateResult(amount, currency);
    
       
    
        resultElement.innerHTML= `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}<strong>`;
        };

const init = () => {
 const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", onFormSubmit)
    };

 init();