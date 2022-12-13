Ans 1.

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

Ans 2.
p = 15;
t = 12;
r = 12;
    
SI = (p * t * r) / 100;
console.log("Simple Interest = " + SI);



Ans 3.
hours = 2
console.log(hours * 60 * 60);



Ans 4.
side1 =5
side2=6
side3=7
var s = (side1 + side2 + side3) / 2;

var area = console.log(s * ((s - side1) * (s - side2) * (s - side3)));


Ans 5.
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));
  