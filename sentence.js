function change(charm) {
    var string = eval(charm), change = "", newstring = string.split("."), tochange;
    for (var i = 0; i < newstring.length; i++) {
        tochange = newstring[i].trim().charAt(0);
        newstring[i] = newstring[i].replace(tochange, tochange.toUpperCase());
    }
    change = newstring.join(".");
    return change;
}

var x = document.getElementsByTagName("p");
var i;
for (i = 0; i < x.length; i++) {
var divi =document.getElementsByTagName('p')[i].innerHTML;
var text = change('divi');
document.getElementsByTagName("p")[i].innerHTML = text;
}
