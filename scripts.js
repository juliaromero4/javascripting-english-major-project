let userinput;
userinput = prompt("what do you want to have for dinner?", "type your answer here.");
if (userinput === "burrito") {
  $("#response").html("brilliant choice!");
} else {
  $("#reponse").html("dont you want a burrito?");
}
