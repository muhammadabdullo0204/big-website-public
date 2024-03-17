import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sozlamalar',
  templateUrl: './sozlamalar.component.html',
  styleUrl: './sozlamalar.component.scss'
})
export class SozlamalarComponent implements OnInit {



  myForm!: FormGroup;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  age: number = 0;
  dateOfBirth: string = '';
  address: string = '';
  phone: string = '';


  ngOnInit(): void {

    this.myForm = this.fb.group({
      name:['Ismingizni Kiriting', [Validators.required , Validators.minLength(3) , Validators.maxLength(25)]  ],
      name1:['Familyangizni Kiriting',  [Validators.required , Validators.minLength(3) , Validators.maxLength(25)] ],
      email:['Emalingizni Kiriting', [ Validators.required , Validators.minLength(6) , Validators.maxLength(35)] ],
      password:['', Validators.required , [Validators.required , Validators.minLength(5) , Validators.maxLength(15)] ],
      // age:['', Validators.required ,  [Validators.required , Validators.minLength(5) , Validators.maxLength(35)] ],
      checkbox: [false, Validators.requiredTrue],
      dateOfBirth: ['', Validators.required],
      address:['', Validators.required , [Validators.required , Validators.minLength(5) , Validators.maxLength(35)] ],
      phone:['', Validators.required , [Validators.required , Validators.minLength(9) , Validators.maxLength(15)] ],

    })

  }
  constructor(private fb:FormBuilder){

  }


 
  onsubmit() {
    this.firstName = this.myForm.value.name;
    this.lastName = this.myForm.value.name1;
    this.email = this.myForm.value.email;
    this.password = this.myForm.value.password;
    this.age = this.myForm.value.age;
    this.dateOfBirth = this.myForm.value.dateOfBirth;
    this.address = this.myForm.value.address;
    this.phone = this.myForm.value.phone;

    
    }

    displayMessage(): void{
      this.firstName = 'siz tugamni bosdingiz';
      this.lastName = 'siz tugamni bosdingiz';
      this.email = 'siz tugamni bosdingiz';
      this.password = 'siz tugamni bosdingiz';
      this.dateOfBirth = 'siz tugamni bosdingiz';
      this.address ='siz tugamni bosdingiz';
      this.phone ='siz tugamni bosdingiz';
      


    }


   
}
