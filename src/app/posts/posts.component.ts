import { error } from 'util';
import { BadInput } from './../common/bad-input';
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
    this.service.getAll()
      .subscribe(
      response => {
        this.posts = response.json();
      });
  }


  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.posts.splice(0,0,post);

    this.service.create(JSON.stringify(post))
      .subscribe(
      response => {
        post['id'] = response.json().id; //Because we don't have ['id'] 
        // this.posts.push(post);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);          
        } else {
          throw error;
        }

      })
  }


  updatePost(post) {
    this.service.update(post, JSON.stringify({ isRead: true }))
      .subscribe(
      response => {
        console.log(response.json());
       });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
      response => {
        console.log(response)
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

      },
      (error: AppError) => {
       if (error instanceof NotFoundError) {
          alert('This post has already been deleted!!!!!!!!!!!!!');
        } else {
          throw error;
        }

      })
  }
}
