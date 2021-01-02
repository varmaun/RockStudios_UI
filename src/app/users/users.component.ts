import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 currentPage=1;
 page: number;
 count: number; 
 pageSize: number;
userData:any[];
  constructor() {
    this.userData=[{
      "firstName": "Rack",
      "lastName": "Jackon",
      "gender": "man",
      "age": 24,
      "streetAddress": "126",
      "city": "San Jone",
      "state": "CA",
      "postalCode": "394221"
      },
      {
        "firstName": "Varma",
        "lastName": "U",
        "gender": "man",
        "age": 24,
        "streetAddress": "126",
        "city": "San Jone",
        "state": "CA",
        "postalCode": "394221"
      },
      {
          "firstName": "Ashok",
          "lastName": "Varma",
          "gender": "man",
          "age": 24,
          "streetAddress": "126",
          "city": "San Jone",
          "state": "CA",
          "postalCode": "394221"
       },
       {
            "firstName": "Jay",
            "lastName": "Sankar",
            "gender": "man",
            "age": 24,
            "streetAddress": "126",
            "city": "San Jone",
            "state": "CA",
            "postalCode": "394221"
        }
    ];
    this.page=1;
    this.pageSize=2;
    this.count=0;
   }

  ngOnInit(): void {
  }
 
  pageChanged(event: any): void {
    this.page = event.page;
  }
}
