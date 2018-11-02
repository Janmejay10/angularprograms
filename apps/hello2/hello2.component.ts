import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello2',
  template: `
  <p>Good Morning to all of you from hello2</p>
  <p> {{msg}}</p>
  <p> {{ sayHello() }} </p>
  `,
  styles: ['p{color:red}']
  
})
export class Hello2Component implements OnInit {

  msg = 'Hello from Angular';

  sayHello()
  {
    return 'Again from Angular';
  }

  constructor() { }

  ngOnInit() {
  }

}
