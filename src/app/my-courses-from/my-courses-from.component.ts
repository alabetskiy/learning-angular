import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-courses-from',
  templateUrl: './my-courses-from.component.html',
  styleUrls: ['./my-courses-from.component.css']
})
export class MyCoursesFromComponent  {


  categories = [
   { id:1, name:'Development'},
   { id:2, name:'Art'},
   { id:3, name:'Language'}
  ];

  ddlLook(x){
    // console.log(x);
  }
  SubData(f){
    console.log(f);
  };

}
