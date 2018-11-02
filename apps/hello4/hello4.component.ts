import {Component} from '@angular/core';

@Component({

    selector: 'hello4',
    template: `Hello to all from hello4 <br/>
            {{title}}<br/>
            {{author}}<br/>
            {{pages}}<br/>
            {{price}}<br/>
            {{onlineAvailable}}<br/>
            {{pdfAvailable}}<br/>
            {{version}}<br/>

    
    `

})

export class Hello4Component
{
    title = 'Angular';
    author: string = 'vijay';
    pages = 3000;
    price: number = 1000;
    onlineAvailable = true;
    pdfAvailable: boolean = true;
    version: any = 5.0;
    

}