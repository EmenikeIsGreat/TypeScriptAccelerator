
/*
js
let arr = [1,2,3,4]
let mixedArr = [1,"Emenike",true]

*/
let arr:string[] = []
let mixedArray: (number | string | boolean)[] = [1, "Alice", true];
// this is not the same as number[] | string[] | boolean[] because this is saying the variable can either be a array of number, strings or boolean
mixedArray.push("Emenike",true)