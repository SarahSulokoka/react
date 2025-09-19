interface ApiResponse<T>{
    data: T;
    error?: string
}

const userResponse: ApiResponse<{name: string, age: number }> = {
    data: {name: "John", age: 35} , 
    error: "error 404"
}