import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  
})
export class CarouselComponent implements OnInit{

  @Input() imagesList:string[] | undefined;
  @Input() uniqueid:number | undefined;
  @Input() genderlist:string[] | undefined;


  pause : boolean = false;
  delay : number = 2000;
  constructor(private router : Router) { }

  ngOnInit(): void {
    if('/location' == this.router.url){
      this.delay = 9999999;
    }
  }

  start(start:number){
    if('/location' == this.router.url){
      if(start){
        this.delay = 2000;
        this.pause = true;
      }else{
        this.delay = 9999999;
        this.pause = false;
      }
    }
  }
}
