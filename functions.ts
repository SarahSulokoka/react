function greet(name: string, age?: number) {
    console.log(`Name: ${name}`);
    if(age) console.log(`Age: ${age}`);

    
}

greet("Mary" ,25)