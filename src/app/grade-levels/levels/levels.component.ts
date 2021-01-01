import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
  levelList:any[];
   constructor() {
     this.levelList=[{
       "levelName": "Level 1",
       "status": "Active"
       },
       {
        "levelName": "Level 2",
        "status": "Active"
       },
       {
        "levelName": "Level 3",
        "status": "Active"
        },
        {
         "levelName": "Level 4",
         "status": "Active"
         },{
         "levelName": "Level 5",
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
