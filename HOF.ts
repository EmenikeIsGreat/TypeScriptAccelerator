//map
let nums = [1,2,3,4]
const doubled = nums.map(num => num*2)
console.log(doubled)

//filter
nums = [1,2,3,4]
const filtered = nums.filter(num => num%2 == 1)
console.log(filtered)


//reduce
nums = [1,2,3,4]
const reduced:number = nums.reduce((num:number,acc:number) => num + acc,0)// the generic represents the acc value
console.log(reduced)