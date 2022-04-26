
var cars = ["Fred", "Mary", "Joe"];
console.log(cars.length);
for ( var i = 0; i < cars.length ; i++ ) {
  console.log(cars[i]);
  console.log(i);
  document.getElementById("jOutput").innerHTML=
  document.getElementById("jOutput").innerHTML + " " + cars[i];
};
for ( var n = 0; n < 20; n = n + 1 ) {
  if((n+1)%2==0) {
    console.log((n+1) + " is even. ");
    document.getElementById("evenodd").innerHTML = document.getElementById("evenodd").innerHTML + (n+1) + " is even. "
  } else {
    document.getElementById("evenodd").innerHTML = document.getElementById("evenodd").innerHTML + (n+1) + " is odd. "
    console.log(n);
    console.log((n+1) + " is odd. ");
  }
};

var numset1 = [ 2, 6, 9, 8 ];
var numset2 = [ 11, 1236, 9000, 434 ];
var numset3 = [];
console.log("test");
console.log( numset1[0] + numset2[0]);
for (var y = 0; y < numset1.length ; y++ ) {
  console.log(numset1[y] + numset2[y]);
  document.getElementById("addingup").innerHTML = document.getElementById("addingup").innerHTML + (numset1[y]+numset2[y]) + ",,";
  numset3[y] = numset1[y] + numset2[y];
}


for ( var n = 20; n > 0; n = n - 1 ) {
  if(n%2==0) {
    console.log(n + " is odd. ");
    document.getElementById("countingdown").innerHTML = document.getElementById("countingdown").innerHTML + (n + " is odd. ");
  } else {
    document.getElementById("countingdown").innerHTML = document.getElementById("countingdown").innerHTML + (n + " is even. ");
    console.log(n);
      console.log(n + " is even. ");
  }
};

let str1 = "javascript";
console.log(str1);
for (p = 0; p < str1.length; p++){
  
}
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even
