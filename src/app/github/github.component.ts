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

    constructor(private profileService: GithubService){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    
      this.profileService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      });
    }
     
    findProfile(){
      this.profileService.updateProfile(this.username);
      this.profileService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
    
      this.profileService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      })
    }
      ngOnInit() {
        
        this.profileService.updateProfile('');
        this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
        this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);
      }
    
    }
