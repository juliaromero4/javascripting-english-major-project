let numbers, newnumbers;
numbers=[1,2,3];
newnumbers=numbers.map(function(number){
  return number * 2;
});
console.log("the doubled numbers are", newnumbers);
