"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Jose Felix
   Date:   4.11.19 
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/
window.addEventListener("load", function () {
      // retrieve the field value pairs from the URL search
      var formData = location.search.slice(1);
      formData = formData.replace(/\+/g, " ");
      formData = decodeURIComponent(formData);
      var formFields = formData.split(/[&=]/g);

      //write the field values to the order form
      document.forms.order.elements.orderDate.value = formFields[1];
      document.forms.order.elements.modelName.value = formFields[5];
      document.forms.order.elements.qty.value = formFields[7];
      document.forms.order.elements.initialCost.value = formFields[9];
      document.forms.order.elements.protectionName.value = formFields[13];
      document.forms.order.elements.protectionCost.value = formFields[15];
      document.forms.order.elements.subtotal.value = formFields[17];
      document.forms.order.elements.salesTax.value = formFields[19];
      document.forms.order.elements.totalCost.value = formFields[21];
});

window.addEventListener("load", function () {
      document.getElementById("subButton").onclick = runSubmit;
      // oninput is for when you want something to work when it is inputed
      document.getElementById("cardName").oninput = validateName;
      // event listener that runs on input of a text field
      document.getElementById("cardNumber").oninput = validateNumber;
      //validate for the month and year inputs
      document.getElementById("expMonth").onchange = validateMonth;
      document.getElementById("expYear").onchange = validateYear;
      document.getElementById("cvc").oninput = validateCVC;

});

function runSubmit () {
      validateName();
      validateCredit();
      validateNumber();
      validateMonth();
      validateYear();
      validateCVC();
}

function validateCVC() {
      var cardCVC = document.getElementById("cvc");
      var creditCard = document.querySelector('input[name="credit"]:checked').value;
      if (cardCVC.validity.valueMissing) {
            cardCVC.setCustomValidity("Enter your CVC number");
      } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
            
      } else if () {

      } else {

      }
}



function validateMonth () {
      var cardMonth = document.getElementById("expMonth");
      if (cardMonth.selectedIndex === 0) {
            cardMonth.setCustomValidity("Select the expiration month");
      } else {
            cardMonth.setCustomValidity("");
      }
}
function validateYear () {
      var cardYear = document.getElementById("expYear");
      if (cardYear.selectedIndex === 0) {
            cardYear.setCustomValidity("Select the expiration Year");
      } else {
            cardYear.setCustomValidity("");
      }
}

function validateNumber () {
      var cardNumber = document.getElementById("cardNumber");
      // checks if something is missing
      if (cardNumber.validity.valueMissing) {
            cardNumber.setCustomValidity("Enter your card number as it appears on your card");
            // checks for a pattern mismatch
      } else if (cardNumber.validity.patternMismatch) {
            cardNumber.setCustomValidity("Enter a valid card number");
            // says nothing
      } else {
            cardNumber.setCustomValidity("");
      }
}

function validateCredit() {
      // this is working down the DOM tree
      var creditCard = document.forms.payment.elements.credit[0];
      if (creditCard.validity.valueMissing) {
            creditCard.setCustomValidity("Select your credit card");
      } else {
            creditCard.setCustomValidity("");
      }
}

function validateName() {
      var cardName = document.getElementById("cardName");
      // validity and valueMissing are the defaults in JavaScript
      if (cardName.validity.valueMissing) {
            cardName.setCustomValidity("Enter your name as it appears on your card");
      } else {
            //empty string is for when there is no message to be sent
            cardName.setCustomValidity("");
      }
}