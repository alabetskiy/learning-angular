import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {

  // private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http); //because I inherit from DataService I need to specify super() (calling the constructor of DataService)
  }

}


