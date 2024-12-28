/*

class Car{

    constructor(make,model){
        this.make = make
        this.model = model
    }

    drive(){
        console.log(this.make + " is driving and the model is " + this.model)
    }
}


*/

class Car{
    model:string // you need to define such if you are going to use this

    constructor(public make:string,model:string,private age:number){ // private means you cant access it
        make = make // the public keyword means you dont ahve to inlcude this.
        this.model = model
        this.age = age
    }

    drive(){
        console.log(this.make + " is driving and the model is " + this.model)
    }
}

let newCar = new Car("Emenike","Emenike",23)

