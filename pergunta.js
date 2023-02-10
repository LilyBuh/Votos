let num1 = 0;
let num2 = 0;

function resultado() {
 document.getElementById("total").innerHTML = "total de votos em morango: " + num1;
 document.getElementById("total2").innerHTML = "total de votos em banana: " + num2;
 document.getElementById("total3").innerHTML = "total geral de votos: " + (num1 + num2);
}

function morango(){
 num1++;
}

function banana(){
 num2++;
}