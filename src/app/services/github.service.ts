import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class GitHubService extends DataService {

constructor(http: Http){

    super('https://api.github.com/users/alabetskiy/following', http);
    
}
}

