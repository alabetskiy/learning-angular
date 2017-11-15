import { GitHubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'my-github-followers',
  templateUrl: './my-github-followers.component.html',
  styleUrls: ['./my-github-followers.component.css']
})
export class MyGithubFollowersComponent implements OnInit  {
  
  constructor(private route: ActivatedRoute, private service: GitHubService) { }

  followers : any[];

  ngOnInit() {
    
    //retrieving values from query params
   this.route.queryParams.subscribe((params:Params)=> {
    let pageNumber = params['page'];
    console.log(pageNumber);
   })
   

    this.service.getAll()
    .subscribe(response => {
      this.followers=response.json();
      console.log(this.followers);
    })
  }

}


