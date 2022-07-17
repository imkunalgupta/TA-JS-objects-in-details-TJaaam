let animalMethods ={
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        return this.location = newLocation;
    },
    summary: function(){
        return(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    },
}

function Animal (location, noOfLegs){
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
    },
    changeColor: function(newColor){
        this.color = newColor;
    },
     summary: function() {
        return(`I am ${this.name} and I am of ${this.color} color. I can also bark`)
     },
    
}

function dog (location, noOfLegs, name, color){
    let dogInfo = Object.create(dogMethods);
    dogInfo.location = location;
    dogInfo.noOfLegs = noOfLegs;
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
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
    },
     summary: function () {
        return(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
     },  
}


function cat (location, noOfLegs, name, colorOfEyes){
    let catInfo = Object.create(dogMethods);
    catInfo.location = location;
    catInfo.noOfLegs = noOfLegs;
    catInfo.name = name;
    catInfo.colorOfEyes = colorOfEyes;
    return catInfo;
}