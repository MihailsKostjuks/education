class Person {
    constructor(name) {
        this.name = name
    }

    printName_arrow() { // arrow function is more like a variable
        setTimeout(() => {
            console.log('arrow: ' + this.name) // arrow function doesn't redefine variables
        }, 1000) // arrow func can reach variables of constructor scope
    }

    printName_func() { // js thinks we create function with its own scope
        setTimeout(function() {
            console.log('function: ' + this.name) // normal function redefines variables
        }, 1000)
    }
}

let misha = new Person('Misha');
console.log(this.name); // is undefined because this.name is defined in another scope
misha.printName_arrow(); // uses variables where is it defined
misha.printName_func(); // uses variables where it is called
// conslusion: always use arrow function


