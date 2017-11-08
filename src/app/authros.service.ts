import { Injectable } from '@angular/core';

@Injectable()
export class AuthrosService {

  constructor() { }

  GetAuthorsList(){
    return ["Pushkin", "Tolstoy","Esenin"];
  }

}
