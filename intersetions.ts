type A = {name:string}
type B = {age:number}
type C = A & B
const person:C = {name:"Emenike", age:23} // by defailt typescript treats files with
