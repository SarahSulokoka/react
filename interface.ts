interface User {
    name: string;
    age: number;
    isAdmin?: boolean;  //isAdmin can be optional , thats why we used ? 
}

type User1 = {
    name: string;
    age: number;
    isAdmin?: boolean;

}

interface User {
    lastname: string;
}


// type ID = string | number ;

// let id: ID = "CF8"
// let id: ID = 25;


//Tuple 

type Point = [number, number];
const p:  Point = [10, 20] 



//const usr: User = {name: "Maria", age: 25, isAdmin: false}


//Intersection

type Person = {name: string};
type Employee = {company: string};

//type EmployeeInfo = Person & Employee;

type EmployeeInfo = {
    name: string;
    company: string 
}

const e: EmployeeInfo = {name: "John", company: "AUEB"}



