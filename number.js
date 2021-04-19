var a = +prompt('enter first number');
var b = +prompt("enter second number");
var c = +prompt("enter third number");
// var num = a =b =c;

if ((a<b && b<c) || (a>b && b>c)){
    alert(b)
}else if ((a > b && a < c) || (a < b && a > c)) {
  alert(a);
} else if ((c > b && c < a) || (c < b && c > a)) {
  alert(c);
}



// if (((a < b && b < c) || (a > b && b > c)) ||  ((a > b && a < c) || (a < b && a > c)) || ((c > b && c < a) || (c < b && c > a))){
//   alert(num);
// } else{
//     alert('error')
// }
