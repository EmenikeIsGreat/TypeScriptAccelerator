/*
function printId(id) {
  console.log(id);
}

printId(1);     // 1
printId("abc"); // abc

*/

function printId(id:string|number):void{ // allows you to specif that id can be a string or a number
    console.log(id)
}