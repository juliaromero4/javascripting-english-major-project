let tipcalculator
tipcalculator= function(total, tiprate){
  //step 1:
  let tipamount;
  tipamount = tiprate*total;
  //and step 2:
  $("#response").html("your tip is $" + tipamount);
}

//now call (or "execute") the function, passing a
// total of $50.00 and a tiprate of 20%

tipcalculator(50.00, 0.2);
