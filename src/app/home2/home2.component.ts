import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {



/*
  task ="practice interpolation examples";
  City:String="HYD";  
  public Greetings="";
  public data="";
  sno:any;
  b:boolean=true;
  ngOnInit(){}
  changeStatus(){
    this.b=!this.b;
  
  }
 
 
  values: any[] = [
     {
       sno: '1', name: 'rohit', gender: 'Male',
       runs: 8000, dateOfBirth: '25/6/1992'
     },
     {
       sno: '2', name: 'kohli', gender: 'Male',
       runs: 8125, dateOfBirth: '9/6/1993'
     },
     {
       sno: '3', name: 'raina', gender: 'Male',
       runs: 5900, dateOfBirth: '12/8/1990'
     },
     {
       sno: '4', name: 'dhoni', gender: 'male',
       runs: 6506, dateOfBirth: '14/10/1988'
     },
     {
       sno: '5', name: 'pandya', gender: 'male',
       runs: 7555, dateOfBirth: '14/10/1992'
     },
     {
       sno: '6', name: 'mandhana', gender: 'female',
       runs: 3656, dateOfBirth: '14/10/1998'
     }
   ];    
 
 
 
 
 
  
  onClick(){
    this.Greetings="hi...hloo  ";
    console.log("hiii");
  }
  onShow(){
    debugger
   alert('Show button clicked!')
 };
 
  sendit(data:any){
    debugger
    console.log(data)
    
 
  }
 */
  registerForm!: FormGroup;
  submitted = false;
   registerusers:any=[];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){
    this,this.registerForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['',[ Validators.required,Validators.minLength(10)]],

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  },{
    validator: this.MustMatch('password', 'confirmPassword')
});

  }
  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
         // stop here if form is invalid
         if (this.registerForm.valid) {
           this.registerusers.push(this.registerForm.value);
           
           localStorage.setItem('registerusers',JSON.stringify(this.registerusers))
        }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

add() {
  console.log(this.registerForm.value);
}



}
