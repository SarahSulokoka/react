function identityNumber(value: number) : number {
    return value;
}

function identity<T>(value: T): T {
    return value;
}


function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}


const numbers = getFirst<number>([ 0 , 25 , 23]);

console.log(numbers);

