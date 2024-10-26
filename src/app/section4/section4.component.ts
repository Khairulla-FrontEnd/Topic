import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.css'
})
export class Section4Component implements OnInit {
     timelineEl:any;
     pattern:any;
     pattern2:any;
     search:any;
     search3:any;
     timelineIcon3:any;
     newPattern:any;
     newPattern2:any;
     count:any = 0;
     count2:any = 0;
     timelineIcon:any;
     isReached2:boolean = false;
     isReached3:boolean = false;
     timeline = [
      {
        id:0,
        title:"Search for your favourite topic",
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?',
        icon:'bi bi-search',
      },
      {
        id:1,
        title:'Bookmark & Keep it yourself',
        text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis est vel quo, nihil repellat quia velit error modi earum similique odit labore. Doloremque, repudiandae?',
        icon:'bi bi-bookmark',
      },
      {
        id:2,
        title:'Read & Enjoy',
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?',
        icon:'bi bi-book',
      },
     ];
     ngOnInit(): void {
       this.timelineEl = document.querySelectorAll('.timeline');
       window.addEventListener('scroll',() => {
          this.timelineEl.forEach((item:HTMLElement,index:any) => {
           if(index !== this.timelineEl.length - 1){
             this.pattern = item.querySelector('.timeline-pattern');
           }
           this.pattern.style.backgroundColor = '#80d0c7';
               const itemRect = item.getBoundingClientRect();
               this.search = item.querySelector('.bi');
               this.timelineIcon = item.querySelector('.timeline-icon');
               if(itemRect.bottom <= scrollY / 2){
                 if(index === 0){
                   this.pattern.style.backgroundColor = '#13547a';
                   this.newPattern = item.querySelector('.new-pattern');
                   this.newPattern.style.width = `${this.count}px`;
                   this.count = itemRect.bottom / 5;
                  }
                  if(index === 0 || Math.floor(scrollY) > 1900 && index === 1){
                    this.search.style.backgroundColor = '#13547a'
                    this.timelineIcon.style.backgroundColor = '#13547a';
                    if(Math.floor(scrollY) > 1900){
                      this.isReached2 = true;
                    }else{
                     this.isReached2 = false;
                    }
                  }
                 }else{
                   if(index !== this.timelineEl.length - 1){
                     this.pattern.style.backgroundColor = '#80d0c7';
                   }
                  this.search.style.backgroundColor = '#80d0c7'
                  this.timelineIcon.style.backgroundColor = '#80d0c7'
             }
         })
         this.timelineEl.forEach((item:HTMLElement,index:number) => {
           if(index === 1 && this.isReached2){
             this.pattern2 = item.querySelector('.timeline-pattern');
                   this.pattern2.style.backgroundColor = '#13547a';
                   const itemRect = item.getBoundingClientRect();
                   this.newPattern2 = item.querySelector('.new-pattern');
                   this.newPattern2.style.width = `${this.count2}px`;
                   this.count2 = itemRect.bottom / 5;
                  }
                  if(index === 2){
             if(scrollY > 2200){
               this.isReached3 = true;
               this.search3 = item.querySelector('.bi');
               this.timelineIcon3 = item.querySelector('.timeline-icon');
               this.search3.style.backgroundColor = '#13547a';
               this.timelineIcon3.style.backgroundColor = '#13547a';
             }else{
              this.isReached3 = false;
             }
           }
         })
       })
     }
}
