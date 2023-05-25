function sayHello(who) {
    document.write("HELLO " + who);
    document.write("<br>");
}

document.write("Hello World! "); //Displays Hello World on the web page!
var number = 7;
var sentence = "ABCDEFG";
var length = sentence.length;
document.write(length);
document.write("<br>");


var result = sentence.substring(3, 5);
document.write(result);
document.write("<br>");


var a = new Array(7);
a[0] = "cat";
a[1] = "dog";
a[2] = 95;
a[6] = true;

document.write(a[6]);
document.write("<br>");

var b = new Array("cat", "dog", 9, "yeet");
var c = ["yeet", 0, 4, 5, 12];
document.write(c);
document.write("<br>");

sayHello("Harry");
document.write("<br>");

if (number > 10) {
    alert(number);
}

for (i=0; i<10; i++) {
    document.write("LOOPED " + i + " times" + "<br>");
            }


document.write("<h1> YEET </h1>");