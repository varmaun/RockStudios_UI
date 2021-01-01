import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
 courseList:any[];
   constructor() {
     this.courseList=[{
       "courseName": "Guitar",
       "courseImg": "Image",
       "status": "Active"
       },
       {
        "courseName": "Violin",
        "courseImg": "Image",
        "status": "Active"
       },
       {
        "courseName": "Drums",
        "courseImg": "Image",
        "status": "Active"
        },
        {
          "courseName": "Flute",
          "courseImg": "Image",
          "status": "Active"
         },{
          "courseName": "Classical Music",
          "courseImg": "Image",
          "status": "Active"
         }
         
     ];
     this.page=1;
     this.pageSize=5;
     this.count=0;
    }
 
   ngOnInit(): void {
   }
  
   pageChanged(event: any): void {
     this.page = event.page;
   }
}
