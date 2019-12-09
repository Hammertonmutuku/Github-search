import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubService } from './github-service/github.service';
import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DateCountPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
