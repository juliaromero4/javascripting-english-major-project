let turtles, sortedturtles, reversedturtles, turtlenames;
turtles= ["leonardo", "donatello", "raphael", "michelangelo"];
sortedturtles= turtles.sort();
//sortedturtles is:
//["donatello","leonardo","michelangelo","raphael"]
reversedturtles=turtles.reverse();
//reversedturtles is:
//["raphael","michelangelo","leonardo","donatello"]
turtlenames=turtles.join(" ");
//turtlesnames is "leonardo donatello raphael michelangelo"
turtles.push("splinter");
//turtles is now:
//["leonardo","donatello","raphael","michelangelo","splinter"]
turtles.pop();
//back to ["leonardo","donatello","raphael","michelangelo"]
