import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
  programList:any[];
   constructor() {
     this.programList=[{
       "programName": "Weekly",
       "duration": 1,
       "days":7,
       "description":"Monthly Program",
       "status": "Active"
       },
       {
        "programName": "Fort Nightly",
        "duration": 1,
        "days":14,
        "description":"Monthly Program",
        "status": "Active"
       },
       {
        "programName": "Monthly",
        "duration": 1,
        "days":30,
        "description":"Monthly Program",
        "status": "Active"
        },
        {
          "programName": "Quarterly",
          "duration": 3,
          "days":90,
          "description":"Monthly Program",
          "status": "Active"
         },{
          "programName": "Half Yearly",
          "duration": 6,
          "days":183,
          "description":"Monthly Program",
          "status": "Active"
         },
         {
          "programName": "Yearly",
          "duration": 12,
          "days":365,
          "description":"Monthly Program",
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
