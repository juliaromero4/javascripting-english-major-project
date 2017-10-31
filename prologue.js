
$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text: "Whan"}, {text: "that"}, {text: "Aprill,"}, {text: "with"},
        {text: "his"}, {text: "shoures"}, {text: "soote"}];
line1Text = line1.map(function(word){
  return word.text;
}).join(" ");
$("#prologue").html("<p>" + line1Text + "<br /></p>");
  line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,",
          modern: "April,"}, {text: "with"}, {text: "his"}, {text: "shoures",
          modern: "showers"}, {text: "soote", modern: "sweet"}];

  line1Text = "<blockquote><p>";
        line1.forEach(function(word){

  line1Text = line1Text + word.text + " ";
        });
        line1Text = line1Text + "<br />(line 2 would go here)</p></blockquote>";
        $("#prologue").html(line1Text);
line1.foreach(function(word){
  let wordstring;
  wordstring=word.text;
  if (word.modern){
    wordstring="<a href='#'>"+wordstring+"</a>";}
  line1Text=line1Text+wordstring+" ";
});
$("#prologue a").click(function(){
  $("#prologue a").click(function(){
    // Define the text and the word that was clicked.
    let glossText, clickedWord;
    clickedWord = $( this ).text();
    glossText = "<h2>You clicked on the word: " + clickedWord + "</h2>";
    $("#glosses").html(glossText);
  });
  $("#glosses").append("<h2>You clicked on a word!</h2>");
});
line1.forEach(function(word){
  let wordString;
  wordString = word.text;
  if (word.modern){
    // Add word.modern as a data attribute to the <a> tag.
    wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
  }
  line1Text = line1Text + wordString + " ";
});
$("#prologue a").click(function(){
  let glossText, clickedWord, modernWord;
  clickedWord = $( this ).text();
  // .data("modern") looks for the data-modern HTML attribute.
  modernWord = $( this ).data("modern");
  glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
  $("#glosses").html(glossText);
});
//I copied and pasted all of your given sets of code and
//I still am not getting any result on my page 
