let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo={name:"leoanrdo",color:"blue",weapon:"katana"};
donatello={name:"donatello", color:"purple",weapons:"bo"};
raphael={name:"raphael", color:"red",weapon:"sai"};
michelangelo={name:"michelangelo",color:"blue",weapon:"nuchaku"};
turtles=[leonardo, donatello, raphael, michelangelo];
weapons=turtles.map(function(turtle){
  return turtle.weapon;
}).sort().join(", ");
$("#response").html(weapons);
