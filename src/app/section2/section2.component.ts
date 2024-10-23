import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css',
  animations:[
    trigger('hoverUnhover',[
      state(
        'hovered',style({
          bottom:"10px"
        })
      ),
      state('unhovered',style({
        bottom:0
      })),
      transition('hovered => unhovered',[animate('0.3s')]),
      transition('unhovered => hovered',[animate('0.3s')])    
    ])
  ]
})
export class Section2Component implements OnInit{
      isHovered:boolean = false;
      isHovered2:boolean = false;
      hover(){
        this.isHovered = true
      }
      unhover(){
        this.isHovered = false;
      }
      hover2(){
        this.isHovered2 = true
      }
      unhover2(){
        this.isHovered2 = false;
      }
      ngOnInit():void{

      }
}
