import {Component} from '@angular/core';

@Component({
    selector: 'hello3',
    template : `<p>Hello to all from hello3</p>
               <p>{{title}} </p>
               <p>{{sayHello()}}
    `,
    styles: ['p{color:blue}']
})

export class Hello3Component
{
    title = "Hello from Hello3";

    sayHello()
    {
        return "Hello to all again from hello3";
    }
}