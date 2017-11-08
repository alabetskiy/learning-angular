import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

contactMethods = [
  {id:1, name:'Email'},
  {id:2, name:'Phone'},
];

  constructor() { }

  ngOnInit() {
  }
Submit(f){
  console.log(f);
}

chkBox(x){
console.log(x);
}


}
