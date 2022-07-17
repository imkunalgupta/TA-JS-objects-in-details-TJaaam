// //- Pseudoclassical Pattern

// Animal.prototype ={
//     eat: function(){
//         console.log(`I live in ${this.location} and I can eat`);
//     },
//     changeLocation: function(newLocation){
//         this.location = newLocation;
//         return this.location;
//     },
//     summary: function(){
//         return(`I live in ${this.location} and I have ${this.noOfLegs}`)
//     },
// }
// function Animal (location, noOfLegs){
//    this.location = location;
//    this.noOfLegs = noOfLegs;
// }


// Dog.prototype = {
//     bark: function(){
//         alert(`I am ${this.name} and I can bark 🐶`)
//     },
//     changeName: function (newName) {
//         this.name = newName;
//         return this.name;
//     },
//     changeColor: function(newColor){
//         this.color = newColor;
//         return this.color;
//     },
//      summary: function() {
//         return(`I am ${this.name} and I am of ${this.color} color. I can also bark`)
//     },  
// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// function Dog (location, noOfLegs, name, color){
//     Animal.apply(this,[location, noOfLegs]);
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype = {
//     meow: function(){
//         alert(`I am ${this.name} and I can bark 🐱`)
//     },
//     changeName: function (newName) {
//         this.name = newName;
//         return this.name;
//     },
//     changeColorOfEyes: function(newColor){
//         this.colorOfEyes = newColor;
//         return this.colorOfEyes;
//     },
//      summary: function () {
//         return(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
//      },  
// }
// Object.setPrototypeOf(Cat.prototype, Animal.prototype);

// function Cat (location, noOfLegs, name, colorOfEyes){
//     Animal.apply(this,[location, noOfLegs]);
//     this.name = name;
//     this.colorOfEyes = colorOfEyes;
// }

//- Class Pattern


class Animal{
    constructor(location, noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    }
    summary(){
        return(`I live in ${this.location} and I have ${this.noOfLegs}`)
    }
}


class Dog extends Animal {
    constructor(location, noOfLegs, name, color){
        super(location, noOfLegs);
        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary() {
        return(`I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
}

class Cat extends Animal {
    constructor(location, noOfLegs, name, colorOfEyes){
        super(location, noOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can bark 🐱`)
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    }
     summary() {
        return(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
     }
}
