//Square object

class Square  {
    constructor(side){
    this.width = side;
    this.height = side;
    this.numberOfTimes = 0;
    }
    discription(){
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        this.numberOfTimes++;
        if(this.numberOfTimes >= 4){
            alert(`Upper Limit Reached`)
        }else{
            return this.width * this.height;
        }
    }
    set area(value){
      let side = Math.sqrt(value);
      this.width = side;
      this.height = side;
    }
    static isEqual(a, b){
       return a.area === b.area;
    }
};


let square1 = new Square(200);
let square2 = new Square(100);


// User Object

class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name){
        if(name.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
        let firstName = name.split(' ')[0];
        let lastName = name.split(' ')[1];
        this.firstName = firstName;
        this.lastName = lastName;
        }
    }
    nameContains(str){
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
};

let user1 = new User('John', 'Stark');
let user2 = new User('Kunal', 'Gupta');