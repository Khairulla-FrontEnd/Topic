import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.css'
})
export class Section5Component {
  active:number = 0;
setActive(id:number){
  this.active = id
}
}
