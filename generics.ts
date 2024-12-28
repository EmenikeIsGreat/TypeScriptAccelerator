/**
 funciton do(value){
    return value
 
 }
 */
function doIt<T>(value: T): T {
    return value
  }

function doIt2<T,U>(value: T,value2:U): [T,U] {
    return [value,value2]
}

console.log(doIt2<string,number>("Emenike",22))// best practice such that it is readable as to what types it is taking in if you can
