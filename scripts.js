let string, firstletter, stringlength;
string="this is a string.";
//strings have indices and lengths, just like arrays:
firstletter=string[0];
//firstletter is "T"
stringlength=string.length;
//stringlength is 17
//
//strings also have methods, just like arrays:
let uppercasestring, replacedstring;
uppercasestring=string.touppercase();
//uppercasestring is "THIS IS A STRING."
replacedstring=string.replace("string","pipe");
//replacedstring is "this is a pipe."
