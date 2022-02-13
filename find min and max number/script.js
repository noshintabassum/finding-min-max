var n = parseInt(prompt("enter array size : "));
//array declaration
var num = Array();
//getting array input
for (var u = 0; u < n; u++) {

    num[u] = parseInt(prompt("enter value for array index : " + u));

}
//full array output
for (var u = 0; u < n; u++) {

    document.write(num[u] + "        ");

}
//finding min max
var max = num[0];
var min = num[0];
for (var i = 1; i < n; i++) {

    if (max < num[i]) {
        max = num[i];
    }
    if (min > num[i]) {
        min = num[i];
    }
}
document.write("<br>");
document.write("max : " + max + "<br>");
document.write("min : " + min);