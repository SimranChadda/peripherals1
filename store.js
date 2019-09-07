   var intel1Qty = document.getElementById('quantityintel1').value;
   var intel2Qty = document.getElementById('quantityintel2').value;
   var intel3Qty = document.getElementById('quantityintel3').value;
   /*var ssdQty = document.getElementById('quantity SSD');
   var hard disk driveQty = document.getElementById('quantity HARD DISK DRIVE');
   var 4GBQty = document.getElementById('quantity4 GB');
   var 8GBQty = document.getElementById('quantity8 GB');
   var 16GBQty = document.getElementById('quantity16 GB');*/
   var submitBtn = document.getElementById('submitButton');
   var outputPara = document.getElementById('totalPrice');

     function calcPrice(qty, price){
     return qty * price;
   }

   function getMessage(qty, total){
     return outputPara.innerHTML = 'You purchased ' + qty + ' items and your total price is $' + total + '<br><br>' + '<button>Proceed To Checkout</button>';
   }


   submitBtn.addEventListener("click", function() { 
   if(intel1Qty.value === '0' && intel2Qty.value === '0'  && intel3Qty.value === '0'){
      alert('Please purchase at least 1 ticket');
    }else {
      var totalINTEL1 = calcPrice(intel1Qty.value, 49);
	  console.log(totalINTEL1)
      var totalINTEL2 = calcPrice(intel2Qty.value, 20);
	  console.log(totalINTEL2)
      var totalINTEL3 = calcPrice(intel3Qty.value, 30);
	  console.log(totalINTEL3)


	   var totalPrice = totalINTEL1 + totalINTEL2 + totalINTEL3;
	   var totalTix = parseInt(intel1Qty.value) + parseInt(intel2Qty.value) + parseInt(intel3Qty.value);


	    getMessage(totalTix, totalPrice);
    }

   }); 
