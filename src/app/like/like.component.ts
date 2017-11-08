import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
@Input() isLiked: boolean;
@Input() likesCount: number;

 onClick(){
   this.likesCount += (this.isLiked) ? -1 : +1;
   this.isLiked =!this.isLiked;
 }  

}
