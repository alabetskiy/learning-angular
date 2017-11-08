import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.css']
})
export class StartButtonComponent  {
  @Input() isActive = false;
  @Output() change = new EventEmitter();

    ClickStar(){
      if(!this.isActive){
       this.isActive=true;
        } else{
       this.isActive=false;
        }

    this.change.emit({newValue: this.isActive});
     }}
