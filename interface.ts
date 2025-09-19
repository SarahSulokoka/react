interface User {
    name: string;
    age: number;
    isAdmin?: boolean;  //isAdmin can be optional , thats why we used ? 
}

type User = {
    name: string;
    age: number;
    isAdmin?: boolean;

}

interface User {
    lastname: string;
}

//const usr: User = {name: "Maria", age: 25, isAdmin: false}


