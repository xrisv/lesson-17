for (let i = 0; i <= 100; i++) {
    console.log(i);
}

let i = 0;
while (i <= 50) {
    console.log(i);
    i++;
}

let myArray = ["Element1", "Element2", "Element3", "Element4", "Element5"];

console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.unshift("NewElement");
console.log(myArray);

myArray.push("AnotherNewElement");
console.log(myArray);

let newArray = [];

for (let i = 1; i <= 10000; i++) {
    newArray.push(i * i);
}

console.log(newArray);

let numbersArray = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log(sum);

function convertCase(inputString) {
    return {
        uppercase: inputString.toUpperCase(),
        lowercase: inputString.toLowerCase()
    };
}


let testString = "MY NAME IS JOHN";
console.log(convertCase(testString));


function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbersArray));




