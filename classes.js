class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello my name is ${this.name}`) 
    }
    
}

const p = new Person("Maria", 25)


// p.name = 25;  //wrong 

p.name = "John"
p.greet();