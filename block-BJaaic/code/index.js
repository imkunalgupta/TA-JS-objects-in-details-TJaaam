let animalMethods ={
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary: function(){
        return(`I live in ${this.location} and I have ${this.noOfLegs}`)
    },
}

function animal (location, noOfLegs){
    let animalInfo = Object.create(animalMethods);
    animalInfo.location = location;
    animalInfo.noOfLegs = noOfLegs;
    return animalInfo;
}

let dogMethods ={
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function (newName) {
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
     summary: function() {
        return(`I am ${this.name} and I am of ${this.color} color. I can also bark`)
     },  
}
Object.setPrototypeOf(dogMethods, animalMethods);

function dog (location, noOfLegs, name, color){
    let dogInfo = animal(location, noOfLegs);
    Object.setPrototypeOf(dogInfo, dogMethods);
    dogInfo.name = name;
    dogInfo.color = color;
    return dogInfo;
}

let catMethods ={
    meow: function(){
        alert(`I am ${this.name} and I can bark 🐱`)
    },
    changeName: function (newName) {
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
     summary: function () {
        return(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
     },  
}
Object.setPrototypeOf(catMethods, animalMethods);

function cat (location, noOfLegs, name, colorOfEyes){
    let catInfo = animal(location, noOfLegs);
    Object.setPrototypeOf(catInfo, catMethods);
    catInfo.location = location;
    catInfo.noOfLegs = noOfLegs;
    catInfo.name = name;
    catInfo.colorOfEyes = colorOfEyes;
    return catInfo;
}