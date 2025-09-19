// create a type aliase Coordinates with x and y as number and then create a variable point of type Coordinates and assign { x: 10 , y: 20}
let point = { x: 10, y: 20 };
console.log(point);
let role = "editor";
let checkResult = [true, "success"];
const add = (x, y) => {
    return x + y;
};
console.log(add(2, 4));
const logMessage = (msg) => {
    console.log(msg);
};
logMessage("hello world");
const calculateArea = (rect) => {
    return rect.width * rect.height;
};
console.log(calculateArea({ width: 2, height: 3 }));
// Create a class Person with:
// Properties: name (string), age (number)
// A constructor to initialize them
// A method greet() that logs "Hello, my name is <name>".
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello my name is ${this.name}`;
    }
}
const Alex = new Person("Alex", 20);
console.log(Alex.greet());
// Make a class Car:
// Properties: brand (string), speed (number)
// Method accelerate(amount: number) that increases the speed
// Method brake(amount: number) that decreases the speed (but not below 0).
// Create an object and test the methods.
class Car {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;
        return this.speed;
    }
    brake(amount) {
        this.speed -= amount;
        if (this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }
}
const Honda = new Car("Honda", 50);
class Book {
    title;
    author;
    constructor(details) {
        this.title = details.title;
        this.author = details.author;
    }
    describe() {
        return `${this.title} by ${this.author}`;
    }
}
const book = new Book({ title: "Atomic Habits", author: "James Clear" });
console.log(book.describe());
class Student {
    id;
    name;
    marks;
    constructor(details) {
        this.id = details.id;
        this.name = details.name;
        this.marks = details.marks;
    }
    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
        console.log(`Grade: ${this.grade()}`);
    }
    grade() {
        if (this.marks >= 80)
            return "A";
        if (this.marks >= 50)
            return "B";
        return "C";
    }
}
const student1 = new Student({ id: 1, name: "Aryan", marks: 80 });
student1.display();
export {};
