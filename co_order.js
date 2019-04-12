"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Jose Felix
   Date:   4.11.19
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {
      // this selects the form with the id orderForm
      var orderForm = document.forms.orderForm;
      // this makes the value of the orderDate of the orderForm and sets it equal to new Date()
      // new Date() = new Date(year, month, day, hours, minutes, seconds, milliseconds) empty tag makes it 
      orderForm.elements.orderDate.value = new Date().toDateString();
      //focus gets the focus or highlight of your selected input in this case that is the orderForm input
      orderForm.elements.model.focus();

      // calcylate the cost of the order
      calcOrder();
});

function calcOrder() {
      var orderForm = document.forms.orderForm;

      // calculate the initial cost of the order
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      // initial cost = model x quantity
      var intitalCost = mCost*quantity;
      orderForm.elements.initialCost.value = initialCost;

      // retrieve the cost of the user's protection plan
      var pCost = document.querySelector('input[name="protection"]:checked').value;
      orderForm.elements.protectionCost.value = pCost;

      //calculate the order subtotal
      orderForm.elements.subtotal.value = initialCost + pCost;

      //calculate the sales tax
      var salesTax = 0.05 * (initialCost + pCost);
      orderForm.elements.salesTax.value = salesTax;

      //calculate the cost of the toal order
      var totalCost = initialCost + pCost + salesTax;
      orderForm.elements.totalCost.value = totalCost;
}