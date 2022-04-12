var cars = ["Fred", "Mary", "Joe"];
console.log(cars.length);
for ( var i = 0; i < cars.length ; i++ ) {

  console.log(cars[i]);
  console.log(i);
  document.getElementById("jOutput").innerHTML=
    document.getElementById("jOutput").innerHTML + " " + cars[i];
}
for ( var n = 0; n <= 20; n = n + 1 ) {
  if((n+1)%2==0) {
    console.log(n + " is odd. ");
  } else {
    console.log(n);
      document.getElementById("evenodd").innerHTML=
      document.getElementById("jOutput").innerHTML + " " + cars[n];
  }
};

var numset1 = [ 2, 6, 9, 8 ];
var numset2 = [ 11, 1236, 9000, 434 ];
console.log( numset1[0] + numset2[0]);
