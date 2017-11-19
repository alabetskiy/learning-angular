import { Observable } from 'rxjs/Observable';
import { GitHubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'my-github-followers',
  templateUrl: './my-github-followers.component.html',
  styleUrls: ['./my-github-followers.component.css']
})
export class MyGithubFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: GitHubService) { }

  followers: any[];

  ngOnInit() {
    //I'm combining two observables in one
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      combined[1].get('page');

      this.service.getAll()
        .subscribe(response => {
          this.followers = response.json();
          console.log(this.followers);
        })
    })

    //retrieving values from query params
    //  this.route.queryParams.subscribe((params:Params)=> {
    //   let pageNumber = params['page'];

    //  })


  }

}


