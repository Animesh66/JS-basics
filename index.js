console.log('Hello World');
let firstName = 'Animesh';  // This is string datatype
const varConstant = 2.1; // This is a typeof number
console.log(typeof varConstant)
let lastName = null; // This is a object data type
console.log(typeof lastName);
let dob = undefined;  // this is undefined data type.
console.log(typeof dob);
let flag = true;    // This is boolean datatype
console.log(typeof flag);
let person = {
    name: "Animesh",
    age: 31
}; // This is an object
console.log(typeof person);
console.log(person.name);  // This is the way we can access the value of an array.
console.log(person['age']); // This is the way we can access the value of an array.
let myArray = ['red', 'blue', 2];
console.log(typeof myArray);
console.log(myArray.length);
function findSq(number){
    return number * number;
}
console.log(findSq(3));
console.log( 1 === 1); // this is strict equality operator. Check for type + value.
console.log(1 == '1'); // this is Loose equality operator. Check for only value.
let point = 90;
let type = point > 100 ? 'gold' : 'silver';  // This is called ternary operator in JS.
console.log(type);
let userColor = undefined;
let defaultColor = 'red';
let choosenColor = userColor || defaultColor; // This is logical OR operator.
console.log(choosenColor);
let myColor = userColor && defaultColor; // This is logical AND operator.
let newColor = !userColor; // This is logical NOT operator.
const readPermisson = 4;
const writePermission = 2;
const executePermisson = 1;
let myPermission = 0;
myPermission = (readPermisson | writePermission); // This is bitwise OR operator
console.log(myPermission & executePermisson); // This is bitwise AND operator
let hour = 10;
if (hour => 6 && hour <= 12) {
    console.log('Good Morning');
}
else if (hour > 12 && hour <= 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}
// This is for loop
for (let i = 0; i <= 5 ; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
// This is while loop
let j = 0;
while(j <= 5){
    console.log('value of J is: ', j);
    j++;
}
k = 0;
// This is do-while loop
do{
    console.log('Value of K is: ', k);
    k++
}while(k<=6);
// This is for-in loop for looping over object elements
for(let key in person){
    console.log(key, person[key]);
}
// This is for-of loop for looping over array element
for(let item of myArray){
    console.log(item);
}
// This is a OOP of writing objects
let circle = {
    radius: 10,
    location: {
        latitude: 10,
        longitude: 12
    },
    draw: function(){
        console.log('draw');
    }
}
console.log(circle.draw);

// This is factory function
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('circle with radius', radius);
        }
    };
}
const myCircle = createCircle(2);
console.log(myCircle);
console.log(myCircle.draw());

// This is constructor function
function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}
const newCircle = new Circle(2);
console.log(newCircle);
console.log(newCircle.draw());
const myNewArray = [1, 2, 3, 4, 4];
myNewArray.push(6, 7); // Append the value at the end of array
myNewArray.pop(); // This method will remove the last element of an array
myNewArray.unshift(4, 5); // Add the values at the begining of the array
myNewArray.shift(); // This method will remove element from the first
myNewArray.splice(2, 0, 'a', 'b'); // add element aat specific position
console.log(myNewArray);
myNewArray.indexOf('a');
myNewArray.includes('b'); // check if the element is present in the array or not
console.log(myNewArray);
console.log(myNewArray.find(function(value){return value > 2;})); //this is a call back function
console.log(myNewArray.find(value => value > 2)); // this is called arrow function
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second); // This method is used to concatinating two arrays.
combined.slice(2,4); // This method is used to slice an array
const combo = [...first, 'a', ...second]; // This is called spread operator to combine the arrays
combined.forEach((number, index) => console.log(index, number)); // This is forEach loop which takes a 
// callback function and execute it for each iteration of the array. ForEach is used for arrays.
let newNumbers = [54, 11, 108, 30];
newNumbers.sort();
let myObject = [{id: 12, fullname: 'Json'}, 
                {id: 14, fullname: 'Animesh'},
                {id: 17, fullname: 'Donkey'}];
myObject.sort(function(num1, num2){
    if (num1.fullname > num2.fullname) return 1;
    if (num1.fullname < num2.fullname) return -1;
    return 0;
});
console.log(myObject);
myNewObject = [{id: 12, fullname: 'Json'}, 
{id: 14, fullname: 'Animesh'},
{id: 17, fullname: 'Donkey'}];
const itsNewObject = myNewObject.filter(obj => obj.id >= 13);
console.log(itsNewObject);
const movies = [{title: 'a', year: 2018, rating: 4.2},
                {title: 'b', year: 2017, rating: 4.7},
                {title: 'c', year: 2018, rating: 3},
                {title: 'd', year: 2018, rating: 4.5}]
// Write a proram to find the movies that are relase in the year 2018 
// and have rating greater than 4
// and sort them using rating
// and log the move title on the console.
const titles = movies.filter((obj) => obj.year === 2018 && obj.rating > 4)
                     .sort((obj1, obj2) => obj1.rating - obj2.rating)
                     .reverse()
                     .map(obj => obj.title);
console.log(titles);
// Write a program to moveing an element from the given array.
const num = [1, 2, 3, 4];
const output = move(num, 0, 5)
console.log(output);
function move(array, index, offset){ 
    position = index + offset;
    if (position >= array.length || position < 0){ // check if the position is valid or not
        console.error('Invalid input');
    }
    else {
        const output = [...array]; // created a copy of the given array
        const element = output.splice(index, 1)[0]; // removing the element from the given index
        output.splice(position, 0, element); // added back the element to the new position
        return output;
    }
}
// WAP to find the max number from an array using the reduce method.
console.log(getMax(num));
function getMax(array){
    return array.reduce((a,b) => a > b ? a : b);
}

// Use getter and setters to set the properties of an object
const personDetails = {
    firstName: 'Animesh',
    lastName: 'Mukherjee',
    get fullName(){  // This is a getter method
        return `${personDetails.firstName} ${personDetails.lastName}`;
    },
    set fullName(value){  // This is a setter method
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

console.log(personDetails.fullName);  // This returns the full name from getter method
personDetails.fullName ='Suprit Mukherjee';
console.log(personDetails.fullName); // This returns the full name just set 

// WAP to calculate the sum of numbers or arrays passed to the function
function sum(...items){ // ...items is rest operator here
    if ((items.length === 1) && Array.isArray(items[0]))
        items = [...items[0]]; // this ...items is called spread operator
    return items.reduce((a,b) => a +b);
}




