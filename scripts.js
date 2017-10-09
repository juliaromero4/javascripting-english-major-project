let userstring, uppercaseminusE, uppercasedstring;
userstring=prompt("what do you want to uppercase?");
uppercaseminusE=function(string){
  for(let i= 0; i<string.length; i=i+1){
    let result;
    result="";
    for(let i=0; i<string.length; i=i+1) {
    let letter;
    letter=string[i];
    if (letter==="e"){
      result=letter;
    }else {
      result=letter.touppercase();
    }
  }
  return result;
}
};
uppercasedstring=uppercaseminusE(userstring);
$("#response").html(uppercasedstring);
