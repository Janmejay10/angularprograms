import { Component } from "@angular/core";



export class A
{
    constructor()
    {
        console.log("from A.constructor");
    } // class A is not a part of component so can give argument
    //console.log("from A.constructor" + arg0);
}

@Component({
    selector:'hello8',
    template:'Hello from hello8'
})

export class Hello8Component
{
     constructor(arg0: A)
     {
         console.log("From Hello8Component.constructor");
        // let a1 = new A(); //creating an object to A explicitly
         //then we have to supply value in the parameter here or string also
     }   //like 2 or abc
     
}