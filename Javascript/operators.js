//Operators in JS

/*
Artihmatic(+, -, *, /, %, **)
Unary(++, --)
Assignment(= , +=, -=, /=, %= etc.)
Comparison(>, >=, <, <=, ==, !=)
Logical
*/

let a = 10; 
let b = 5;
//arithmatic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//unary
console.log(a++); //10
console.log(++a); //12

//assingment op
b = a;
console.log(b); // 10

//Comparison
// to compare 2 values 
let age = 18;
console.log(age > 18); //false
console.log(age >= 18); //true
console.log(age < 18); //false

// ==
/*
"123" == 123 //true
1 == '1' //true
0 == ' ' //true
0 == false //true
null == undefined //true
*/

// ==
/*
"123" === 123 //false
1 === '1' //false
0 === ' ' //false
0 === false //false
null === undefined //false
*/

//Comparison for non-numbers
//it compaires based on unicode values of the letters 
//'a' -> 61, 'b' -> 62..
//'A' -> 41, 'B' -> 42..
/*
'a' > 'A' //true
'a' > 'b' //false
'b' < 'c' //true
'B' < 'C' //true
'*' < '&' //false
'P' < 'p' //true
*/
