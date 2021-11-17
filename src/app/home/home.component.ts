import { validateAndRewriteCoreSymbol } from '@angular/compiler-cli/src/ngtsc/imports';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registeredusers:any;
   loginSuccess=false;
  submitted: boolean;
  constructor() { }
  


  ngOnInit(): void {
    this.registeredusers = JSON.parse(localStorage.getItem("registerusers"));
    console.log(this.registeredusers);

  }
  /*xyz(a:any){
    console.log(a)


  }*/

  /*
  abc(){
    console.log(this.RestaurantForm);
};
  RestaurantForm=new FormGroup({
    Restaurantname:new FormControl('',[Validators.required,Validators.minLength(8)]),
    DishName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    DishPrice:new FormControl()
  })
  */
 
 LoginForm= new FormGroup({
   Mobile :new FormControl('',[Validators.required,Validators.minLength(10)]),
   Password :new FormControl('',[Validators.required,Validators.minLength(6)]),

 })

 
  // convenience getter for easy access to form fields
  get l() { return this.LoginForm.controls; }

 xyz(){
  console.log(this.LoginForm.value);
};
login(){
  for(let i=0;i<=this.registeredusers.length;i++){
   
    if(this.LoginForm.value.Mobile==this.registeredusers[i].mobile && this.LoginForm.value.Password==this.registeredusers[i].password){
      this.loginSuccess=true;
      alert('login successfully')
    }
    else {
     
      alert('login failed ')
       return
   }
   

  }
 
  
}

}
