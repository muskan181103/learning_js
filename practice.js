// take one input form thee user and check if the number is even or odd , if even then check the area of circle or else print?//
let a = parseInt(prompt("Enter any number:"))
let r = a
let area =3.14*r*r

if (a%2==0){
    
    console.log(a + " is an even number.    " + "   Area of circle = " + area);
    
}else {
    console.log(a+"  Number is odd");
    
}