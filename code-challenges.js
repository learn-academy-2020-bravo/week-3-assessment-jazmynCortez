// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]
//fibonacciSequence works by taking 0+1 =1 + 1 = 2 + 1 = 3 +2 = 5 etc.
//have the sum of num1 and num2 + num3 and so forth - maybe use .map because it will turn it into an array for me?

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
//this works but I got it off the internet and I see how it works but I don't know why I can't come up with these things off my own head. I dont even know where to start without having a hint

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-9, 9, 7, 199]
//function that takes in the array
//will create an array that filters out all the odd numbers first - maybe use .filter for this part
//then from that array that was just created, create a loop function that will sort the odd numbers from least to greatest?
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  const onlyOdds = (array) => {
  return array.filter(value => value %= 2).join()
}
console.log(onlyOdds(fullArr1))
//I have literal no idea how to make them go in order for some reason, and how do I even get the booleans out? I'm so confused

// Expected output: [-823, 7, 23]

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
//I'm going to want to split the string apart - .split
//going to want to filter through the indexes to find the middle letter can I just do index[0], how do I set that up?
//I think i'm going to need to use .length so I can find the middle index - where can I even put that?
var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const findMiddle = (str) => {
  return str.split("").filter(value =>
  value).join()
}
console.log(findMiddle(middleLetters1));

// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
//class can be called circle
//radius needs to be doubled
//pie needs to be introduced somehow
//I need to talk about this one haha I don't even know where to start honestly
class Sphere{
  constructor(){
    this.radius = []
  }

  radiusDoubled(){
    this.radius * 2
  }
}

var sphere1 = new Sphere()

sphere1.radiusDoubled()

console.log(sphere1.radiusDoubled());



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
const cumulativeSum = (sum => value => sum += value)(0);

//I got this from the internet, I know it works but I have no idea why it works....
console.log(numbersToAdd1.map(cumulativeSum));
console.log(numbersToAdd2.map(cumulativeSum));
console.log(numbersToAdd3.map(cumulativeSum));
