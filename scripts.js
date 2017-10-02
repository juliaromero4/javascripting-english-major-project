let arrayofstrings, arrayofnumbers, arraymixed;
arrayofstrings= ["a","b","c"];
arrayofnumbers= [1,2,3];
arraymixed= ["a",1,null,true,arrayofnumbers,[4.5, 5.6]];
$("#response").html(arrayofstrings[2]);
