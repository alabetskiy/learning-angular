import { AppError } from './../common/app-error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }


  getPosts(){
    return this.http.get(this.url);
  }

  createPost(postModel){
    return this.http.post(this.url, postModel);
  }

  updatePost(updateModel, options:string){
    return this.http.patch(this.url+'/'+ updateModel.id , options);
  }


  //Instead of passing error object to component, I'm "catching" it here using rxjs. 
  //I don't want passing object to component. Separation of concern principle. 
    deletePost(id:number){
    return this.http.delete(this.url + '/'+ id)
    .catch((error:Response) => {
      return Observable.throw(error);
    })
    };

  }


