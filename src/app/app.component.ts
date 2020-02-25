import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {Hits} from "./hits";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'Polling Posts';
  posts: Hits[];
  showModal: boolean;
  data : String;
  postBackup : Hits[];
  search : any;
  constructor(private apiService: ApiService) {
  }
  show(post:any) {
	this.showModal = true; 
	this.data = JSON.stringify(post);
  } 
  hide() {
	this.showModal = false;
  } 
  onClickedOutside(e: Event) {
	this.showModal = false;
  }
  
  ngOnInit(){
    interval(100000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.getPosts())
      )
      .subscribe(res => {this.posts = res.hits; this.postBackup = res.hits;})
	  
	  
  }
}
