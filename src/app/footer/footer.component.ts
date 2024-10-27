import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   footerLinks = [
    {
      id:0,
      title:'Resources',
      link:['Home','How it works','FAQs','Contact'], 
    },
    {
      id:1,
      title:'Information',
      link:['305-240-9671','info@company.com'],
    },
   ];
}
