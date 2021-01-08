import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
  gradeAdd: boolean;
  gradeList:any[];
   constructor() {
     this.gradeList=[{
       "name": "Grade 1",
       "status": "Active"
       },
       {
        "name": "Grade 2",
        "status": "Active"
       },
       {
        "name": "Grade 3",
        "status": "Active"
        },
        {
         "name": "Grade 4",
         "status": "Active"
         },{
         "name": "Grade 5",
         "status": "Active"
         }
         
     ];
     this.page=1;
     this.pageSize=5;
     this.count=0;
     this.gradeAdd=false;
    }
 
   ngOnInit(): void {
   }
  
   pageChanged(event: any): void {
     this.page = event.page;
   }

   addgrade(){
    if(this.gradeAdd){
      this.gradeAdd = false;
    } else {
      this.gradeAdd = true;
    }
    
  }

}
