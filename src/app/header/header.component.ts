import { Component, OnInit } from '@angular/core';
import {
  trigger,state,style,
  animate,transition
} from "@angular/animations";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations:[
     trigger('openClose',[
      state('open',style({
        top:"50px",
        display:"block"
      })),
      state('closed',style({
        top:"100px",
        display:"none"
      })),
      transition('open => closed',[animate('0.3s')]),
      transition('closed => open',[animate('0.3s')])
     ])
  ]
})
export class HeaderComponent implements OnInit{
  nav:any;
 isOpen:boolean = false;
 toggleOpen(){
  this.isOpen = true;
 }
 toggleClose(){
  this.isOpen = false;
 }
 ngOnInit():void{
  this.nav = document.querySelector('nav');
  window.addEventListener("scroll",() => {
    if(window.innerWidth > 992){
      if(window.scrollY >= 15){
         this.nav.style.backgroundColor = "#80d0c7";
      }else{
        this.nav.style.backgroundColor = "transparent";
      }
    }
  });
  
 }
}
