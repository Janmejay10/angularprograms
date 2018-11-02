import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello1',
  templateUrl: './hello1.component.html',
  styleUrls: ['./hello1.component.css']
})
export class Hello1Component implements OnInit {

  country = "India";

  getHello()
  {
    return "hello from the component";
  }

  constructor() { }

  ngOnInit() {
  }

}
