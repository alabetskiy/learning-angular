import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  constructor(private el:ElementRef){
    
  }
  viewModel:boolean = false;

  title:string = this.el.nativeElement.title;
  

@HostListener('click') onclick() {
      this.viewModel = !this.viewModel;
  }


}
