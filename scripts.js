let myhabanerosaucesquirts, myburritoobject;
//first, define and assign a variable for how
//spicy the burrito is.
myhabanerosaucesquirts= 3;
//now assign the burrito object.
myburritoobject={
  tortilla: "wheat",
  quacamole: true,
  beans: "pinto",
  //make use of the variable above.
  habanerosaucesquirts: myhabanerosaucesquirts,
  //use the variable again in a function.
  spiciness: function(){
    if (myhabanerosaucesquirts>0){
      alert("this is a spicy burrito!");
    }else{
      alert("this is a mild burrito.");
    }
  }
};
$("#response").html("your burrito has" +
  myburritoobject.habanerosaucesquirts+
  "squirts of habanero.");
myburritoobject.spiciness();
