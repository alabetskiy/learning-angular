import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { error } from 'util';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(resource) {
 return this.http.post(this.url, resource)
      .catch(this.handleError);
  }

  update(resource, options: string) {
    return this.http.patch(this.url + '/' + resource.id, options);
  }

  //Instead of passing error object to component, I'm "catching" it here using rxjs. 
  //I don't want passing object to component. Separation of concern principle. 
  delete(id: number) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError) //not calling a method handleError, but passing a reference
  };


  
  private handleError(error:Response){
    if (error.status === 400)
       return Observable.throw(new BadInput(error.json()))

    if (error.status === 404) 
      return Observable.throw(new NotFoundError());
    
      return Observable.throw(new AppError(error));
  }
}


