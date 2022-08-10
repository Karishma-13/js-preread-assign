
/* Assignments for practice:
Level 1 - Let’s Begin ----------------------*/


// 1) Javascript Program to Check if a Number is Odd or Even.

/* let n = prompt("enter the no. : ");
if(n%2==0){
    console.log("even no.");
}
else{
    console.log("odd no.");
} */



// 2) Javascript Program to Convert temperature from Celsius to Fahrenheit.

/*let Celsius = prompt("enter the temperature in celsius : ");
let Fahrenheit=0;
Fahrenheit = (Celsius * 1.8) + 32;
console.log("temperature in celsius is: "+Celsius+" and in fahrenheit is: ",Fahrenheit); */



// 3) JavaScript Program to Find the Largest Among Three Numbers.

// parseFloat() function = accept string and convert it into a floating-point number
// Number() function = accept string and convert it into a number, if the value cannot be converted,then NaN is returned

/* let a = Number(prompt("enter no. a :"));
let b = Number(prompt("enter no. b :"));
let c = Number(prompt("enter no. c :"));

if(a>b && a>c){
    console.log("a is largest no.");
}
else if(b>a && b>c){
    console.log("b is largest no.");
}
else{
    console.log("c is largest no.");
} */



// 4) JavaScript Program to print the multiplication table for a number.

/* let n = Number(prompt("enter the number :"));
for(let i=1; i<=10; i++){
    let product = n*i;
    console.log(n+"X"+i,"=",product);
} */



// 5) JavaScript Program to Check if a Number is prime or not.

/* let n = Number(prompt("enter the no. :"));
for(let i=2; i<n; i++){
    if(n%i==0){
        console.log("not a prime no.");
        break;
    }
else{
    console.log("prime no.");
    }
} */





/* Assignments for practice:
Level 2 - Practice more ----------------------*/


// 1) JavaScript Program to print the Factorial of a Number
// (Factorial of 5 = 5 * 4 * 3 * 2 * 1 = 120)

/* let n = Number(prompt("enter the no. :"));
fact=1;

while(n>1){
    fact=fact*n;
    n--;
}
console.log("factorial of no. "+n+" is: "+fact); */





// 2) JavaScript Program to print the Fibonacci series.
// Fibonacci series is a series of numbers where a number is the addition of the last
// two numbers, starting with 0, and 1.
// ( 0, 1, 1, 2, 3, 5, 8, 13, 21 ……)



/* let n=Number(prompt("enter the no. :"));
let a=0;
let b=1;
let c=0;

console.log("fibonacci series for 0 is: "+a);
console.log("fibonacci series for 1 is: "+b);

for(let i=2; i<n; i++){
    c=a+b;
    a=b;
    b=c;
    console.log("fibonacci series for "+i+" is: "+c);
}
console.log("fibonacci of no. "+n+" is : "+c); */





// 3) JavaScript Program to find whether the string is palindrome or not.
// A string is called a palindrome string if the reverse of that string is the same as
// the original string.
//  dad = dad (palindrome)
//  cat ≠ tac (not palindrome)



/* let string = prompt("enter the string: ");
let data="";
let i=(string.length)-1;

while(i>=0){
    data = data+string[i];
    i--;
}
if(string==data){
    console.log("it is a palindrome");
}
else{
    console.log("not a palindrome");
} */





// 4) JavaScript program to print the frequency of a character in a string.


/* let string = prompt("enter the string: ");
let check=prompt("enter the character to find it's frequency: ");
let count=0;
for(let i=0; i<string.length; i++){
  if(check==string[i]){
    count++;
  }
}
console.log(count); */





// 5) JavaScript program to sort the elements of the array (without using sort function).


/* let arr=[5,7,6,0,3,2,1];

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i]>arr[j]){
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }
}
console.log(arr); */





/* Assignment Project 3:
Level 3 ----------------------*/


// 1) JavaScript Program to calculate number of days between 2 Dates. 


/* let date1= new Date("07/15/2015");
let date2= new Date("11/28/2015");

let diff= date2.getTime()-date1.getTime();

let msInDay = (1000*3600*24);

let no_of_days = diff/msInDay;

console.log(no_of_days); */





// 2) JavaScript Program to find the missing number in a given integer array of 1 to 100.


/* let arr = [3,5,6,8]
 
let data = new Array();

for (let i= 1; i<=10; i++) {
  if (arr.indexOf(i) == -1) {     
    data.push(i);
  }
}
console.log(data); */





// 3) JavaScript program to reverse the string using recursion.


/* function revstr(s){
  if (s==""){
    return "";
  }
  else{
    return revstr(s.substr(1)) + s.charAt(0);
  }
}

string=prompt("enter the string: ");
console.log(revstr(string)) */





// 4) JavaScript program to create an object Student with 3 keys (name, id, city) and give them values.
// Write the code to perform the following actions:
// i. Check if the key “name” exists in the object
// ii. Change the value of the key


/* let student={
  name:"sparta",
  id: 35,
  city: "bangalore"
};

console.log(student);
console.log(student.hasOwnProperty("name"));
student.name="tim"
console.log(student); */





// 5) JavaScript program to find the cumulative sum of an array.
// 1. Initial Array: [1, 2, 3, 4]
// 2. Cumulative Sum: [1, 3, 6, 10]
// 3. Explanation: [1, (1+2), (1+2+3), (1+2+3+4)]


/* const cumulativeSum = (sum => value => sum += value)(0);

console.log([5, 10, 3, 2].map(cumulativeSum)); */





// 6) Javascript program to sort an array using the following techniques:
// i. Linear Sort
// ii. Quick Sort
// iii. Bubble Sort



// linear sort


/* let arr=[5,3,0,1,2];

for(let i=1; i<=arr.length; i++){
   let j = i;

   while( arr[j]>=0 && arr[j-1]>arr[j]){

    [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
    j--;
   }
}
console.log(arr); */



// bubble sort

/* let arr=[5,3,0,1,2];

for(let i=arr.length; i>0; i--){
 for(let j=0; j<i; j++){

  if(arr[j]>arr[j+1]){
    [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
  }
 }
}
console.log(arr); */



// quick sort

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]




