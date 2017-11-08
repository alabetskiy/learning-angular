import { AuthrosService } from './../authros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authors;
  constructor(service:AuthrosService) {
    
    this.authors = service.GetAuthorsList();
  

   }


}
