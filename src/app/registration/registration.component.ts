import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators,FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit(): void {
  }
  Registration = new FormGroup(
    {
    FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    LastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Gender: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    MobileNumber: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Password: new FormControl('', ),
    confirmedPassword: new FormControl('', [Validators.required])
     },
    {
      //validator: this.MustMatch('Password', 'confirmedPassword')    
      

    }
  
  );
  /*
    var ArrObject[] =[ { "FirstName": "prashanth", 'LastName': "ch","Email": "cvsp@gmail.com" }];
      localStorage.setItem('arrObject', JSON.stringify(arrObject));*/

      MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true })
      }
      else {
        matchingControl.setErrors(null)
      }
    }

  }
  

  add() {
    console.log(this.Registration.value);

    /*this.titles="this is a local storage";
    localStorage.setItem("token",this.titles)*/
  }
  

}
