// create a type aliase Coordinates with x and y as number and then create a variable point of type Coordinates and assign { x: 10 , y: 20}

type Coordinates = {
    x: number;
    y: number;
}

let point: Coordinates = {x: 10 , y: 20}
console.log(point);

// Define a type alias UserRole as a union of "admin" | "editor" | "viewer". Write a variable role of type UserRole and assign "editor".

type UserRole = "admin" | "editor" | "viewer"

let role: UserRole = "editor"

// Create a type alias Result for a tuple [boolean, string].
// Make a variable checkResult of type Result with values [true, "Success"].

type Result = [boolean , string]

let checkResult: Result = [true, "success"]

// Make a type alias AddFn for a function that takes two numbers and returns a number.Use it to create a function add that adds two numbers.

type AddFn = (a: number , b: number) => number

const add: AddFn = (x , y) => {
    return x + y;
}

console.log(add(2,4));

// Create a type alias Logger for a function that accepts a string and returns void. Write a function logMessage using Logger that prints a message to the console.

type Logger = (message: string) => void

const logMessage: Logger = (msg) => {
    console.log(msg);
}

logMessage("hello world")

// Write a function calculateArea that:
// Takes an object { width: number, height: number } as a parameter.
// Returns the area as a number.
// Define a type alias Rectangle for the parameter.

type Rectangle = {
    width: number,
    height: number
}

const calculateArea = (rect: Rectangle): number => {
    return rect.width * rect.height
}

console.log(calculateArea({width: 2 , height: 3}));


// Create a class Person with:
// Properties: name (string), age (number)
// A constructor to initialize them
// A method greet() that logs "Hello, my name is <name>".

class Person {

    constructor(
        public name: string,
        public age: number
    ){
        this.name = name
        this.age = age
    }

    public greet(){
        return `Hello my name is ${this.name}`
    }
}

const Alex = new Person("Alex" , 20)
console.log(Alex.greet());


// Make a class Car:
// Properties: brand (string), speed (number)
// Method accelerate(amount: number) that increases the speed
// Method brake(amount: number) that decreases the speed (but not below 0).
// Create an object and test the methods.

class Car {

    constructor(
        public brand: string,
        public speed: number
    ){
        this.brand = brand
        this.speed = speed
    }

    public accelerate(amount: number): number {
        this.speed += amount
        return this.speed;
    }
    public brake(amount: number): number {
        this.speed -= amount

        if(this.speed < 0){
            this.speed = 0
        }
        return this.speed;
    }
}

const Honda = new Car("Honda" , 50)
// console.log(Honda.accelerate(10));
// console.log(Honda.brake(30));
// console.log(Honda.brake(100));

// Define a type alias BookDetails with title and author.
// Create a class Book that:
// Has a constructor taking a BookDetails object.
// A method describe() returning a string like "Title by Author".

type BookDetails = {
    title: string,
    author: string
}

class Book {

    public title: string
    public author: string

    constructor(details: BookDetails){
        this.title = details.title
        this.author = details.author
    }

    public describe(): string {
        return `${this.title} by ${this.author}`
    }
}

const book = new Book({title : "Atomic Habits" , author : "James Clear"});
console.log(book.describe());

// Define a type alias StudentInfo with id, name, and marks.
// Write a class Student:
// Constructor takes StudentInfo
// Method display() prints all info.
// Create a function grade(marks: number): string that returns "A", "B", or "C".

type StudentInfo = {
    id: number,
    name: string,
    marks: number
}

class Student {

    public id: number
    public name: string
    public marks: number

    constructor(details: StudentInfo){
        this.id = details.id
        this.name = details.name
        this.marks = details.marks
    }

    public display(): void {
      console.log(`ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Marks: ${this.marks}`);
      console.log(`Grade: ${this.grade()}`);
      
    }
    
    public grade(): string {
        if(this.marks >= 80) return "A";
        if(this.marks >= 50) return "B";
        return "C";
    }
    
}

const student1 = new Student({id : 1 , name : "Aryan" , marks : 80})
student1.display()


