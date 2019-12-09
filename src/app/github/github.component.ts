import { Component, OnInit } from '@angular/core';
import {   GithubService }from '../github-service/github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
    profile:any;
    repos:any;
    username:string;

    constructor(private githubservice: GithubService){
      this.githubservice.updateProfile(this.username);
      this.githubservice.getGithubInfo().subscribe(github => {
        console.log(github);
        this.profile = github;
      });
    
      this.githubservice.getGithubRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      });
    }
     
    findProfile(){
      this.githubservice.updateProfile(this.username);
      this.githubservice.getGithubInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    
      this.githubservice.getGithubRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      })
    }
      ngOnInit() {
        
        this.githubservice.updateProfile('');
        this.githubservice.getGithubInfo().subscribe(github => this.profile = github);
        this.githubservice.getGithubRepos().subscribe(repos =>  this.repos = repos);
      }
    
    }
