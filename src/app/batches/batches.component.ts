import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
  batchList:any[];
   constructor() {
     this.batchList=[{
       "batchName": "Morning",
       "batchTimings": "9:00 - 12:00",
       "status": "Active"
       },
       {
        "batchName": "Afternoon",
        "batchTimings": "9:00 - 12:00",
        "status": "Active"
       },
       {
        "batchName": "Evening",
        "batchTimings": "9:00 - 12:00",
        "status": "Active"
        },
        {
          "batchName": "LateNight",
          "batchTimings": "9:00 - 12:00",
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
