import { Component } from "@angular/core";


@Component({
    selector:'hello7',
    template:'from hello7'
})
export class Hello7Component
{
   /* constructor(test1)
    {
        console.log("from Hello7Component constructor");
    }
method and constructor overloading not possible in typescript
argument constructor also not advisable
we can have only one constructor in typescript class
if you want to use agrument constructor then we have to use dependency injection

    */

   constructor()
   {
       console.log("from Hello7Component constructor");
   }
}