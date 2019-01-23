/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when used "this" without encapsulation, it will try to tap into the main/parent window/console itself, 
* 2. Implicit Binding: in this case "this" becomes specifically connected to Objects and is constricted by them, so it has no relationship with anything outside the object
* 3. Explicit Binding: Primarely used inside functions. it can be used in two ways, either by .call or by .apply, but it also has .bind, which is stored for later use. As well it needs a parameter input.    .call deals with the included parameter as a whole, . apply deals with the contents of the parameter individually.
* 4. New Binding: We use it when we create Constructor Functions. "New" connects .this from an object to a constroctor function
*
* write out a code example of each explanation above
*/

// Principle 1

// Window Binding

// code example for Window Binding


// const individual1 = {
//     name: 'Elan',
//     lastname: 'Riznis',
//     fullname: function() {
//         console.log(`${name} ${lastname}`)
//     }
// }

// individual1.fullname();



// Principle 2

  // Implict Binding

// code example for Implicit Binding

const individual = {
    name: 'Elan',
    lastname: 'Riznis',
    fullname: function() {
        console.log(`${this.name} ${this.lastname}`)
    }
}

individual.fullname()



// Principle 3

       // Explicit Binding

// code example for New Binding

const individual3 = {
    name: 'Elan'
}

const individual4 = {
    name: 'Pancho'
}

const hobbies = ['swimming', 'hiking', 'sleeping']

function assign(hobbies) {
    console.log(`${this.name}'s hobbies involve: ${hobbies}`)
}

assign.call(individual3, hobbies)
// const binding = 

// assign.bind(individual3, hobbies);

// binding()

// if we switched "assign(hobbies)" with "assign(hobby1, hobby2, hobby3)", and "${hobbies}" with "${hobby1}, ${hobby2}, ${hobby3}" Than we would invoke: assign.apply(individual3, ...hobbies) for us to have spacing


// Principle 4

    // New Binding

// code example for Explicit Binding

function Characteristic(name) {
    this.person = name;
    this.height = height;
    // this.speak = function() {
    //     console.log(`${this.name} is ${this.height} ${this.says}`)
    // }
}


const individual5 = {
    name: 'Elan',
    height: '6,4 inches',
    speak: function() {
        console.log(`${this.name} is ${this.height} tall.`)
    }
}

// const elan = new Characteristic('individual5');

individual5.speak()

