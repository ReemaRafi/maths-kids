// var forwardCounting; 
var startCounting = prompt("Enter the start Number of forward counting?");
var endCounting = prompt("Enter the end number of forward counting?");
document.write("<h3>Forward counting;</h3>");

for(var i = 1; i <= 100; i = i+10){
    for(var j=i; j<i +10; j++){
     document.write(" "+ j +"  ");
    }
    document.write("<br><br>");
}
// break;
//  case 2 ;
//  var backwardCounting;

var startCounting = prompt("Enter the start Number of Backward counting?");
var endCounting = prompt ("Enter the end number of Backward counting?");
document.write("<h3>Backward counting;</h3>");

for (var i = 100; i>=1; i = i-10){
    for(var j=i; j>i -10 && j >= 1; j--){
        document.write(" " + j + " ");
    }
    document.write("<br><br>");
}
// break;
// case 3;
// var multiplicationTable;

var tableOf = prompt("Enter the Table number");

document.write("<h3>Multiplication Table of "+ tableOf + "</h3>");

for(var i=1; i<= 10; i++){
document.write(tableOf + "x" +i+"="+(tableOf*i)+"<br>");

}
document.write("<br>");
