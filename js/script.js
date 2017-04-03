//SCRIPT FOR INPUTTING OTHER ADDRESS
var selectAddress = document.getElementById("address-type");

function showAddress() {
    "use strict";
    if (document.getElementById("other-address").selected) {
        document.getElementById("other-address-input").className = "show";
    } else {
        document.getElementById("other-address-input").className = "hide";
    }
}

selectAddress.addEventListener("change", showAddress);
//END SCRIPT FOR INPUTTING OTHER ADDRESS


//SCRIPT FOR VALIDATING DELIVERY ADDRESS
var enterName = document.getElementById("cust-name");
var enterStreetAddress = document.getElementById("street-address");
var enterOptionalNumber = document.getElementById("optional-number");
var enterCity = document.getElementById("city");
var enterState = document.getElementById("state");
var enterZipCode = document.getElementById("zipcode");
var enterPhone = document.getElementById("phone");
var enterEmail = document.getElementById("email");
var nextValidate = document.getElementById("next-button");

function validateName() {
    "use strict";
    var isValid = true, letters = /^[A-Za-z ]+$/, state = /^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])+$/, zip = /\d{5}(-\d{4})?/, phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4}$/, email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    //VALIDATING NAME
    if (enterName.value === "") {
        document.getElementById("name-span").innerHTML = "Name field is required";
        isValid = false;
    } else if (enterName.value.match(letters)) {
        document.getElementById("name-span").innerHTML = "";
        isValid = true;
    } else {
        document.getElementById("name-span").innerHTML = "Only enter letters A-Z or a-z";
        isValid = false;
    }
    //VALIDATING STREET ADDRESS
    if (enterStreetAddress.value === "") {
        document.getElementById("street-address-span").innerHTML = "Street address field is required";
        isValid = false;
    } else {
        document.getElementById("street-address-span").innerHTML = "";
    }
    //VALIDATING CITY
    if (enterCity.value === "") {
        document.getElementById("city-span").innerHTML = "City field is required";
        isValid = false;
    } else {
        document.getElementById("city-span").innerHTML = "";
    }
    //VALIDATING STATE
    if (enterState.value === "") {
        document.getElementById("state-span").innerHTML = "State field is required";
        isValid = false;
    } else if (enterState.value.toUpperCase().match(state)) {
        document.getElementById("state-span").innerHTML = "";
    } else {
        document.getElementById("state-span").innerHTML = "Incorrect State. Ex: CA, NY, CO";
        isValid = false;
    }
    
    //VALIDATING ZIP CODE
    if (enterZipCode.value === "") {
        document.getElementById("zipcode-span").innerHTML = "Zipcode field is required";
        isValid = false;
    } else if (enterZipCode.value.match(zip)) {
        document.getElementById("zipcode-span").innerHTML = "";
    } else {
        document.getElementById("zipcode-span").innerHTML = "Incorrect zipcode. Ex: 12345";
        isValid = false;
    }
    //VALIDATING PHONE NUMBER
    if (enterPhone.value === "") {
        document.getElementById("phone-span").innerHTML = "Phone field is required";
        isValid = false;
    } else if (enterPhone.value.match(phone)) {
        document.getElementById("phone-span").innerHTML = "";
    } else {
        document.getElementById("phone-span").innerHTML = "Invalid phone number. Ex: XXX-XXX-XXXX";
        isValid = false;
    }
    //VALIDATING EMAIL
    if (enterEmail.value === "") {
        document.getElementById("email-span").innerHTML = "Email field is required";
        isValid = false;
    } else if (enterEmail.value.match(email)) {
        document.getElementById("email-span").innerHTML = "";
    } else {
        document.getElementById("email-span").innerHTML = "Invalid email. Ex: abc@gmail.com";
        isValid = false;
    }
    
    //VALIDATING IF ALL REQUIREMENTS MET, SHOW NEXT SECTION
    if (isValid === true) {
        document.getElementById("build").className = "show";
        document.getElementById("next-button").className = "hide";
        window.location.href = "#build";
    }
}

nextValidate.addEventListener("click", validateName);
//END SCRIPT FOR VALIDATING DELIVERY ADDRESS

//SCRIPT FOR SHOWING DOUGH PRICES
var handTossed = document.getElementById("hand-tossed");
var thinCrust = document.getElementById("thin-crust");
var newYork = document.getElementById("new-york");
var glutenFree = document.getElementById("gluten-free");
var build = document.getElementById("build");

function showPrice() {
    "use strict";
    if (handTossed.checked) {
        document.getElementById("hand-tossed-price").className = "show";
        document.getElementById("thin-crust-price").className = "hide";
        document.getElementById("new-york-price").className = "hide";
        document.getElementById("gluten-free-price").className = "hide";
    } else if (thinCrust.checked) {
        document.getElementById("hand-tossed-price").className = "hide";
        document.getElementById("thin-crust-price").className = "show";
        document.getElementById("new-york-price").className = "hide";
        document.getElementById("gluten-free-price").className = "hide";
    } else if (newYork.checked) {
        document.getElementById("hand-tossed-price").className = "hide";
        document.getElementById("thin-crust-price").className = "hide";
        document.getElementById("new-york-price").className = "show";
        document.getElementById("gluten-free-price").className = "hide";
    } else if (glutenFree.checked) {
        document.getElementById("hand-tossed-price").className = "hide";
        document.getElementById("thin-crust-price").className = "hide";
        document.getElementById("new-york-price").className = "hide";
        document.getElementById("gluten-free-price").className = "show";
    } else {
        return false;
    }
}

build.addEventListener("click", showPrice);
//END SCRIPT FOR SHOWING DOUGH PRICES

//SCRIPT FOR CHECKING DOUGH TYPE AND SIZE SELECTED
var cheese = document.getElementById("cheese-options");
var sauce = document.getElementById("sauce-options");
var toppings = document.getElementById("toppings-list");

function validateDough() {
    "use strict";
    var validDough = true;
    if (handTossed.checked || thinCrust.checked || newYork.checked || glutenFree.checked) {
        validDough = true;
    } else {
        window.alert("You must select a pizza dough type and size first");
        validDough = false;
    }
}

cheese.addEventListener("click", validateDough);
sauce.addEventListener("click", validateDough);
toppings.addEventListener("click", validateDough);

//SCRIPT FOR CALCULATING PRICE
var doughType = document.getElementById("dough-type");
var handTossedPrice = document.getElementById("hand-tossed-price");
var thinCrustPrice = document.getElementById("thin-crust-price");
var newYorkPrice = document.getElementById("new-york-price");
var glutenFreePrice = document.getElementById("gluten-free-price");
var cheesePrice = document.getElementById("cheese-options");
var saucePrice = document.getElementById("sauce-options");

function displayTotal() {
    "use strict";
    var total = 0, addTop = 0.99, totalBox = document.getElementById("total"), i;
    
    for (i = 1; i < handTossedPrice.options.length; i += 1) {
        if (handTossedPrice.options[i].selected === true) {
            total = parseFloat(handTossedPrice.options[i].value);
        }
    }
    
    for (i = 1; i < thinCrustPrice.options.length; i += 1) {
        if (thinCrustPrice.options[i].selected === true) {
            total = parseFloat(thinCrustPrice.options[i].value);
        }
    }
    
    for (i = 1; i < newYorkPrice.options.length; i += 1) {
        if (newYorkPrice.options[i].selected === true) {
            total = parseFloat(newYorkPrice.options[i].value);
        }
    }
    
    for (i = 1; i < glutenFreePrice.options.length; i += 1) {
        if (glutenFreePrice.options[i].selected === true) {
            total = parseFloat(glutenFreePrice.options[i].value);
        }
    }
    
    for (i = 0; i < cheesePrice.options.length; i += 1) {
        if (cheesePrice.options[i].selected === true) {
            total += parseFloat(cheesePrice.options[i].value);
            break;
        }
    }
    
    for (i = 0; i < saucePrice.options.length; i += 1) {
        if (saucePrice.options[i].selected === true) {
            total += parseFloat(saucePrice.options[i].value);
            break;
        }
    }
    
    for (i = 0; i < 11; i += 1) {
        if (document.forms[0].toppings[i].checked === true) {
            total += addTop;
		}
    }
    totalBox.value = total;
}

handTossedPrice.addEventListener("change", displayTotal);
thinCrustPrice.addEventListener("change", displayTotal);
newYorkPrice.addEventListener("change", displayTotal);
glutenFreePrice.addEventListener("change", displayTotal);
cheesePrice.addEventListener("change", displayTotal);
saucePrice.addEventListener("change", displayTotal);
toppings.addEventListener("click", displayTotal);
//END SCRIPT FOR CALCULATING PRICE

//SCRIPT FOR FINISHED PIZZA BUTTON
var submitPizza = document.getElementById("submit-pizza");
var billingInfo = document.getElementById("billing-info");

function submitForm() {
    "use strict";
    var confirmPizza = window.confirm("Are you sure you're ready to submit your pizza order?");
    if (confirmPizza === true) {
        billingInfo.className = "show";
        submitPizza.className = "hide";
        window.location.href = "#billing-info";
    } else {
        confirmPizza = false;
    }
}

submitPizza.addEventListener("click", submitForm);
//END SCRIPT FOR FINISHED PIZZA BUTTON

//SCRIPT FOR SAME BILLING ADDRESS
var sameBilling = document.getElementById("same-billing-info");
var billingName = document.getElementById("billing-cust-name");
var billingStreetAddress = document.getElementById("billing-street-address");
var billingOptionalNumber = document.getElementById("billing-optional-number");
var billingCity = document.getElementById("billing-city");
var billingState = document.getElementById("billing-state");
var billingZipCode = document.getElementById("billing-zipcode");
var billingPhone = document.getElementById("billing-phone");
var billingEmail = document.getElementById("billing-email");

function showSameAddress() {
    "use strict";
    if (sameBilling.checked === true) {
        billingName.value = enterName.value;
        billingStreetAddress.value = enterStreetAddress.value;
        billingOptionalNumber.value = enterOptionalNumber.value;
        billingCity.value = enterCity.value;
        billingState.value = enterState.value;
        billingZipCode.value = enterZipCode.value;
        billingPhone.value = enterPhone.value;
        billingEmail.value = enterEmail.value;
    } else {
        billingName.value = "";
        billingStreetAddress.value = "";
        billingOptionalNumber.value = "";
        billingCity.value = "";
        billingState.value = "";
        billingZipCode.value = "";
        billingPhone.value = "";
        billingEmail.value = "";
    }
}

sameBilling.addEventListener("click", showSameAddress);
//END SCRIPT FOR SAME BILLING ADDRESS

//SCRIPT FOR VALIDATING BILLING ADDRESS
var submitOrder = document.getElementById("submit-order");

function validateBillingAddress() {
    "use strict";
    var billingIsValid = true, billingLetters = /^[A-Za-z ]+$/, billingStateReg = /^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])+$/, billingZipReg = /\d{5}(-\d{4})?/, billingPhoneReg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4}$/, billingEmailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    //VALIDATING NAME
    if (billingName.value === "") {
        document.getElementById("billing-name-span").innerHTML = "Name field is required";
        billingIsValid = false;
    } else if (billingName.value.match(billingLetters)) {
        document.getElementById("billing-name-span").innerHTML = "";
        billingIsValid = true;
    } else {
        document.getElementById("billing-name-span").innerHTML = "Only enter letters A-Z or a-z";
        billingIsValid = false;
    }
    //VALIDATING STREET ADDRESS
    if (billingStreetAddress.value === "") {
        document.getElementById("billing-street-address-span").innerHTML = "Street address field is required";
        billingIsValid = false;
    } else {
        document.getElementById("billing-street-address-span").innerHTML = "";
    }
    //VALIDATING CITY
    if (billingCity.value === "") {
        document.getElementById("billing-city-span").innerHTML = "City field is required";
        billingIsValid = false;
    } else {
        document.getElementById("billing-city-span").innerHTML = "";
    }
    //VALIDATING STATE
    if (billingState.value === "") {
        document.getElementById("billing-state-span").innerHTML = "State field is required";
        billingIsValid = false;
    } else if (billingState.value.toUpperCase().match(billingStateReg)) {
        document.getElementById("billing-state-span").innerHTML = "";
    } else {
        document.getElementById("billing-state-span").innerHTML = "Invalid State. Ex: CA, NY, CO";
        billingIsValid = false;
    }
    
    //VALIDATING ZIP CODE
    if (billingZipCode.value === "") {
        document.getElementById("billing-zipcode-span").innerHTML = "Zipcode field is required";
        billingIsValid = false;
    } else if (billingZipCode.value.match(billingZipReg)) {
        document.getElementById("billing-zipcode-span").innerHTML = "";
    } else {
        document.getElementById("billing-zipcode-span").innerHTML = "Incorrect zipcode. Ex: 12345";
        billingIsValid = false;
    }
    //VALIDATING PHONE NUMBER
    if (billingPhone.value === "") {
        document.getElementById("billing-phone-span").innerHTML = "Phone number field is required";
        billingIsValid = false;
    } else if (billingPhone.value.match(billingPhoneReg)) {
        document.getElementById("billing-phone-span").innerHTML = "";
    } else {
        document.getElementById("billing-phone-span").innerHTML = "Invalid phone number. Ex: XXX-XXX-XXXX";
        billingIsValid = false;
    }
    //VALIDATING EMAIL
    if (billingEmail.value === "") {
        document.getElementById("billing-email-span").innerHTML = "Email field is required";
        billingIsValid = false;
    } else if (billingEmail.value.match(billingEmailReg)) {
        document.getElementById("billing-email-span").innerHTML = "";
    } else {
        document.getElementById("billing-email-span").innerHTML = "Invalid email. Ex: abc@gmail.com";
        billingIsValid = false;
    }
    
    //VALIDATING IF ALL REQUIREMENTS MET, SHOW NEXT SECTION
    if (billingIsValid === true) {
        document.getElementById("build").className = "show";
        document.getElementById("next-button").className = "hide";
        window.location.href = "#build";
    }
}

submitOrder.addEventListener("click", validateBillingAddress);
//END SCRIPT FOR VALIDATING BILLING ADDRESS

//SCRIPT FOR VALIDATING CREDIT CARD INFO
var enterCreditCard = document.getElementById("credit-card");
var enterCVC = document.getElementById("cvc");
var visa = document.getElementById("visa");
var mastercard = document.getElementById("mastercard");
var americanexpress = document.getElementById("americanexpress");
var validCreditCard;
var validCVC;
var inputtxt = enterCreditCard.value;
var visaCardNo = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var masterCardNo = /^(?:5[1-5][0-9]{14})$/;
var americanCardNo = /^(?:3[47][0-9]{13})$/;

function validateCreditCard() {
    "use strict";
    var cvcNumber = /^[0-9]{3}$/;
    //VALIDATE VISA CREDIT CARD NUMBER
    if (visa.selected && enterCreditCard.value === "") {
        document.getElementById("credit-card-span").innerHTML = "Credit card number is required";
        validCreditCard = false;
        window.location.href = "#credit-card-information";
    } else if (visa.selected && enterCreditCard.value.match(visaCardNo)) {
        document.getElementById("credit-card-span").innerHTML = "";
        validCreditCard = true;
    } else {
        document.getElementById("credit-card-span").innerHTML = "Invalid Visa number";
    }
    
    //VALIDATE MASTERCARD CREDIT CARD NUMBER
    if (mastercard.selected && enterCreditCard.value === "") {
        document.getElementById("credit-card-span").innerHTML = "Credit card number is required";
        validCreditCard = false;
        window.location.href = "#credit-card-information";
    } else if (mastercard.selected && enterCreditCard.value.match(masterCardNo)) {
        document.getElementById("credit-card-span").innerHTML = "";
        validCreditCard = true;
    } else {
        document.getElementById("credit-card-span").innerHTML = "Invalid Mastercard number";
    }
    
    //VALIDATE AMERICAN EXPRESS CREDIT CARD NUMBER
    if (americanexpress.selected && enterCreditCard.value === "") {
        document.getElementById("credit-card-span").innerHTML = "Credit card number is required";
        validCreditCard = false;
        window.location.href = "#credit-card-information";
    } else if (americanexpress.selected && enterCreditCard.value.match(americanCardNo)) {
        document.getElementById("credit-card-span").innerHTML = "";
        validCreditCard = true;
    } else {
        document.getElementById("credit-card-span").innerHTML = "Invalid American Express number";
    }
    
    //VALIDATE CVC NUMBER
    if (enterCVC.value === "") {
        document.getElementById("cvc-span").innerHTML = "CVC number is required";
        validCVC = false;
    } else if (enterCVC.value.match(cvcNumber)) {
        document.getElementById("cvc-span").innerHTML = "";
        validCVC = true;
    } else {
        document.getElementById("cvc-span").innerHTML = "Invalid CVC number. Must be 3 digits";
        validCVC = false;
    }
    
    if (validCreditCard === true && validCVC === true) {
        window.alert("Your pizza is cooking and on its way!");
    }
}

submitOrder.addEventListener("click", validateCreditCard);
//END SCRIPT FOR VALIDATING CREDIT CARD INFO