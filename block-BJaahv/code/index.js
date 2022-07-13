// Factory Pattern

// function createUser (name, id, projects = 0){
//     let user = {};
//     user.name = name;
//     user.id = id;
//     user.projects = projects;

//     user.getProjects = function(){
//         return projects;
//     };
//     user.changeName = function (name){
//         user.name = name;
//         return user.name;
//     }
//     user.incrementProject = function(value = 1){
//         user.projects =user.projects + value;
//         return user.projects;
//     }
//     user.decrementProject = function(value = 1){
//         user.projects =user.projects - value;
//         return user.projects;
//     }
//     return user;
// }
// // Test
// let user1 = createUser('Kunal', 'kun-1', 5)
// let user2 = createUser('Arya', 'ary-1', 2)
//testdata for user1
// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.projects);
// console.log("projects", user1.incrementProject(25));
// console.log("projects", user1.decrementProject(5));
// console.log(user1.changeName("Stark"));
// console.groupEnd();

// //testdata for user1
// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.projects);
// console.log(`projects`, user2.incrementProject(25));
// console.log(`projects`, user2.decrementProject(5));
// console.log(user2.changeName("Tyrion"));
// console.groupEnd();

// Prototypal Pattern
// let userMethods = {
//     getProjects: function(){
//         return projects;
//     },
//     changeName: function (name){
//         this.name = name;
//         return this.name;
//     },
//     incrementProject: function (value = 1) {
//         this.projects = this.projects + value;
//         return this.projects;
//     },
//     decrementProject: function(value = 1) {
//         this.projects = this.projects - value;
//         return this.projects;
//     }
// };
// function createUser (name, id, projects = 0){
//     let user = Object.create(userMethods);
//     user.name = name;
//     user.id = id;
//     user.projects = projects;
//     return user;
// };

// let user1 = createUser('Kunal', 'kun-1', 5)
// let user2 = createUser('Arya', 'ary-1', 2)

//testdata for user1

// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.projects);
// console.log("projects", user1.incrementProject(25));
// console.log("projects", user1.decrementProject(5));
// console.log(user1.changeName("Stark"));
// console.groupEnd();

// //testdata for user1

// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.projects);
// console.log(`projects`, user2.incrementProject(25));
// console.log(`projects`, user2.decrementProject(5));
// console.log(user2.changeName("Tyrion"));
// console.groupEnd();

// Pseudoclassical Pattern
// function CreateUser (name, id, projects = 0){
//     this.name = name;
//     this.id = id;
//     this.projects = projects;
// };
// CreateUser.prototype = {
//     getProjects (){
//         return projects;
//     },
//     changeName(name){
//         this.name = name;
//         return this.name;
//     },
//     incrementProject(value = 1) {
//         this.projects = this.projects + value;
//         return this.projects;
//     },
//     decrementProject(value = 1) {
//         this.projects = this.projects - value;
//         return this.projects;
//     },
// };

// let user1 = new CreateUser('Kunal', 'kun-1', 5)
// let user2 = new CreateUser('Arya', 'ary-1', 2)

// //testdata for user1

// console.group(user1.name);
// console.log(user1.name);
// console.log(user1.id);
// console.log(user1.projects);
// console.log("projects", user1.incrementProject(25));
// console.log("projects", user1.decrementProject(5));
// console.log(user1.changeName("Stark"));
// console.groupEnd();

// //testdata for user1
// console.group(user2.name);
// console.log(user2.name);
// console.log(user2.id);
// console.log(user2.projects);
// console.log(`projects`, user2.incrementProject(25));
// console.log(`projects`, user2.decrementProject(5));
// console.log(user2.changeName("Tyrion"));
// console.groupEnd();

// Class Pattern

class User {
    constructor (name, id, projects = 0){
        this.name = name;
        this.id = id;
        this.projects = projects;
    };
    getProjects (){
        return projects;
    }
    changeName(name){
        this.name = name;
        return this.name;
    }
    incrementProject(value = 1) {
        this.projects = this.projects + value;
        return this.projects;
    }
    decrementProject(value = 1) {
        this.projects = this.projects - value;
        return this.projects;
    }
};

let user1 = new User('Kunal', 'kun-1', 5)
let user2 = new User('Arya', 'ary-1', 2)

//testdata for user1

console.group(user1.name);
console.log(user1.name);
console.log(user1.id);
console.log(user1.projects);
console.log("projects", user1.incrementProject(25));
console.log("projects", user1.decrementProject(5));
console.log(user1.changeName("Stark"));
console.groupEnd();

//testdata for user1
console.group(user2.name);
console.log(user2.name);
console.log(user2.id);
console.log(user2.projects);
console.log(`projects`, user2.incrementProject(25));
console.log(`projects`, user2.decrementProject(5));
console.log(user2.changeName("Tyrion"));
console.groupEnd();
