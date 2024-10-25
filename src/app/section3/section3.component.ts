import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { trigger,state, style,animate,transition } from "@angular/animations";

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css',
  animations:[
    trigger('changeUnchange',[
      state('changed',style({
        opacity:0
      })),
      state('unchanged',style({
        opacity:1
      })),
      transition('changed => unchanged',[animate('0.3s')]),
      transition('unchanged => changed',[animate('0.3s')])
    ])
  ]
})
export class Section3Component{
  active:number = 0;
     cards = [
        [
          {
            id:0,
            title:'Web Design',
            number:14,
            text:'Topic Listing Template based on Bootstrap 5',
            image:'./images/topics/undraw_Remote_design_team_re_urdx.png',
            color:'#00B0FF'
          },
          {
            id:1,
            title:'Graphic',
            number:75,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_Redesign_feedback_re_jvm0.png',
            color:'#00B0FF'
          },
          {
            id:2,
            title:'Logo Design',
            number:100,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/colleagues-working-cozy-office-medium-shot.png',
            color:'#00B0FF'
          },
        ],
        [
          {
            id:0,
            title:'Advertising',
            number:30,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_online_ad_re_ol62.png',
            color:'#F50057',
          },
          {
            id:1,
            title:'Video Content',
            number:65,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_Group_video_re_btu7.png',
            color:'#F50057',
          },
          {
            id:2,
            title:'Viral Tweet',
            number:50,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_viral_tweet_gndb.png',
            color:'#F50057',
          },
        ],
        [
          {
            id:0,
            title:'Investment',
            text:'Lorem Ipsum dolor sit amet consectur',
            number:30,
            image:'./images/topics/undraw_Finance_re_gnv2.png',
            color:'#536DFE'
          },
          {
            id:1,
            title:'Finance',
            text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis',
            number:25,
            image:'./',
            color:'#536DFE'
          }
        ],
        [
          {
            id:0,
            title:'Composing Song',
            number:45,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_Compose_music_re_wpiw.png',
            color:'#F9A826',
          },
          {
            id:1,
            title:'Online Music',
            number:45,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_happy_music_g6wc.png',
            color:'#F9A826',
          },
          {
            id:2,
            title:'Podcast',
            number:20,
            text:'Lorem Ipsum dolor sit amet consectur',
            image:'./images/topics/undraw_Podcast_audience_re_4i5q.png',
            color:'#F9A826',
          },
        ],
        [
          {
            id:0,
            title:'Graduation',
            text:'Lorem Ipsum dolor sit amet consectur',
            number:80,
            image:'./images/topics/undraw_Graduation_re_gthn.png',
            color:'#00BFA6',
          },
          {
            id:1,
            title:'Educator',
            text:'Lorem Ipsum dolor sit amet consectur',
            number:75,
            image:'./images/topics/undraw_Educator_re_ju47.png',
            color:'#00BFA6',
          },
          
        ]
     ];
     links = [
      {
        id:0,
        title:'Design',
      },
      {
        id:1,
        title:'Marketing',
      },
      {
        id:2,
        title:'Finance'
      },
      {
        id:3,
        title:'Music',
      },
      {
        id:4,
        title:'Education'
      },
     ];
     mainCard:any;
     changed:boolean = false;
     setActive(id:number):void{
      setTimeout(() => {
        this.active = id;
      },500)
     }
     setAnimateTrue(){
this.changed = true;
setTimeout(() => {
  this.changed = false;
},500)
     }
}
