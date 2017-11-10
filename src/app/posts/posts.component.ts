import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
 
  posts: any[];
  

  constructor(private service: PostService) {
    
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
      this.posts = response.json();
    }, 
    error => {
      alert('An unexpected error occurred.');
      console.log(error);
    })
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(JSON.stringify(post))
      .subscribe(
        response => {
        post['id'] = response.json().id; //Because we don;y jvaeh['id'] 
         // this.posts.splice(0,0,post);
        this.posts.push(post);

      },
      (error:Response) => {
        if (error.status === 400){
          //this.form.setErrors(error.json());          
        } else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
     
      })
  }


  updatePost(post){
    this.service.updatePost(post, JSON.stringify({isRead:true}))
    .subscribe(
      response=> {
      console.log(response.json());

    }, 
    error => {
      alert('An unexpected error occurred.');
      console.log(error);
    })
  }

  deletePost(post){
    this.service.deletePost(345)
    .subscribe(
      response => {
      console.log(response)
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      
    }, 
    (error:AppError) => {
      console.log(error);
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      } else{
        alert('An unexpected error occurred.');
        console.log(error);
      }

    })
  }
}
 