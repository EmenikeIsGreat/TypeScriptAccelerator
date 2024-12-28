

/*
js

let person = {name:"Emenike",age:22}

*/

// the reason why we add this export/import is because if we didn't typescript would be thinking that we arent using a module file system
// as a result treating each file under a gloabl scope. Keeping it a module filesystem reduces file scope to just itself
// you can modify tsconfig if you want to prevent this, but typically in react projects this shouldnt be a problem if you just export
export const person:{name:string,age:number} = {name:"Emenike",age:22}
console.log(person)