import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  getProfileInfo() {
    throw new Error("Method not implemented.");
  }
  private username:string;
 private client_id = "0f1b981f0644fe1b074f";
  private client_secret ="54a0e4b62936a3bf0d4bfb8a1dea9aa1ee1ef1e7";
  constructor(private http:HttpClient) { 
    this.username = "hammertonmutuku";
  }
  getGithubInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getGithubRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}

