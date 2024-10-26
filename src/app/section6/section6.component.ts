import { Component } from '@angular/core';

@Component({
  selector: 'app-section6',
  standalone: true,
  imports: [],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css'
})
export class Section6Component {
      sites = [
        {
          id:0,
          title:'Head office',
          text:'Bay St &, Larkin St, San Francisco, CA 94109, United States',
          phone:'305-240-9671',
          email:'info@company.com',
        },
        {
          id:1,
          title:'Dubai office',
          text:'Burj Park, Downtown Dubai, United Arab Emirates',
          phone:'110-220-3400',
          email:'info@company.com',
        },
      ];
}
