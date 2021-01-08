import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
 userAdd: boolean;
 userForm: FormGroup;
 userData:any[];
 submitted: boolean;
  constructor(
    private _formBuilder: FormBuilder
  ) {
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
    this.userAdd = false;
    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      address: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
    this.submitted = false;
   }

  ngOnInit(): void {
    
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }
 
  pageChanged(event: any): void {
    this.page = event.page;
  }

  adduser(){
    if(this.userAdd){
      this.userAdd = false;
    } else {
      this.userAdd = true;
    }
    
  }

  onSubmitUser(){
    this.submitted = true;
    console.log(this.userForm);
  }
}
