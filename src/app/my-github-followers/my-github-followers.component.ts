import { GitHubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-github-followers',
  templateUrl: './my-github-followers.component.html',
  styleUrls: ['./my-github-followers.component.css']
})
export class MyGithubFollowersComponent implements OnInit  {
  
  constructor(private service: GitHubService) { }

  followers : any[];

  ngOnInit() {
    this.service.getAll()
    .subscribe(response => {
      this.followers=response.json();
      console.log(this.followers);
    })
  }

}


