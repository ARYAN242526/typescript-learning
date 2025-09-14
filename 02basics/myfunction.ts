function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string , email: string, isPaid: boolean){
    return {name , email , isPaid}
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return {name , email , isPaid}
}

addTwo(5)
getUpper("hello")
const user = signUpUser("john", "abc@google.com" , true);
console.log(user);

loginUser("alex" , "alex@yahoo.com")

export {}