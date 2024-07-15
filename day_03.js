console.log("**ACTIVITY_1**");

// Task 1 if - else statments

let num = -2;
if (num < 0 ) {
  console.log('Number is Nagetive')
} else if (num > 0) {
  console.log('Number is positive')
} else { 
  console.log('ZERO')
};

// Task 2 

let age = 20;
if (age >= 18) {
  console.log('Elegible for Vote')
} else if (age < 18) {
  console.log(' Not Elegible for Vote')
} else { 
  "Age is not defined"
};

console.log("**ACTIVITY_2**");

// Task 3 Nested if - else
let a = 10;
let b = 20;
let c = 30;
if (a  > b) { 
  if (a > c) { 
    console.log(a, "is the largest num")
  } else { 
    console.log(c, "is the Largest num")
  }
} else { 
  if (b > c) { 
    console.log(b, "is the greatest num");
  } else { 
    console.log(c, "is the greates num");
  }
}

console.log("**ACTIVITY 3**");

// Task 4 switch case

const dayNum = 2;

switch (dayNum) {
  case 1:
    console.log("sunday");
    break;
  case 2: 
    console.log("Monday");
  break;
  case 3: 
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday")  ;
    break;
  case 5:
    console.log("Thursday") ;
    break;
  case 6:
    console.log("Friday") ;
    break;
  case 7:
    console.log("Saturday");
    break;    
  default:
    console.log("InValid number entered");

    break;
};

// Task 5

let marks = 94;
switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 60:
    console.log("C");
    break;
  case marks >= 40:
    console.log("D");
    break;
  case marks < 40:
    console.log("F");
    break;
  default:
    console.log("Invalid Marks");
}

console.log("**ACTIVITY 4**");

// Task 6 Ternary operators

let num1 = 44
const ans = num1 % 2 === 0 ? "even" : "odd";
console.log(`Number is ${ans}`);

