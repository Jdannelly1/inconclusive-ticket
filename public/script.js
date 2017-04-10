/*    Project:  
      Author:
      Date:
      Purpose:
*/ 
/*
  function calcTotal() {
var itemTotal = 0;
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
    
    // Set the variables above for the items that are being sold on the online store.
    
(item1.checked) ? (itemTotal += 15) : (itemTotal += 0);
(item2.checked) ? (itemTotal += 10) : (itemTotal += 0);
(item3.checked) ? (itemTotal += 8) : (itemTotal += 0);
(item4.checked) ? (itemTotal += 33) : (itemTotal += 0);
(item5.checked) ? (itemTotal += 26) : (itemTotal += 0);
    
    //Tax rate is 6%
var salesTaxRate = 0.06 ;
    
    //Equation for determining order total cost.
var orderTotal = itemTotal + (itemTotal * salesTaxRate);
    
    
    
    
    //display the order total number.
    alert("your order total is $" + orderTotal);
    
}
document.getElementById("submit").addEventListener("click", calcTotal, false);




*/


var products = ["Mini Helmet = 15.00" , "Bobblehead = 10.00", "Cheeseburger = 8.00", "Sports Jersey = 33.00", "Football = 26"];
var labels = document.getElementsByTagName("label");
  function processProducts() {
    for (var i=0; i < 5; i++) {
      labels[i].innerHTML=products[i]; 
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
function calcTotal(){

  var itemTotal = 0
  var salesRate = .06
  var items = document.getElementsByTagName("input"); 
  
  for (var i=0; i<5; i++) { 
    if(items[i].checked){
      itemTotal += (items[i].value * 1);
    }
    }
  
  itemTotal *= 1+ salesRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2); 
}

var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal);
    
