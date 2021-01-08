import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  currentPage=1;
  page: number;
  count: number; 
  pageSize: number;
  organizationAdd: boolean;
  organizationList:any[];
   constructor() {
     this.organizationList=[{
       "organizationName": "RockStudios",
       "phoneNo": "9393953534",
       "email":"varma.179@gmail.com",
       "status": "Active"
     }
     ];
     this.page=1;
     this.pageSize=1;
     this.count=0;
     this.organizationAdd = false;
    }
 
   ngOnInit(): void {
   }
  
   pageChanged(event: any): void {
     this.page = event.page;
   }

   addorganization(){
    if(this.organizationAdd){
      this.organizationAdd = false;
    } else {
      this.organizationAdd = true;
    }
    
  }

}
