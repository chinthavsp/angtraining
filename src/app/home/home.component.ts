import { validateAndRewriteCoreSymbol } from '@angular/compiler-cli/src/ngtsc/imports';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
   UserName :new FormControl('',[Validators.required,Validators.minLength(5)]),
   Password :new FormControl('',[Validators.required,Validators.minLength(8)]),

 })
 xyz(){
  console.log(this.LoginForm.value);
};
login(){
  if(this.LoginForm.value.UserName=="prashanth" && this.LoginForm.value.Password=="12345678"){
    alert('login successfully')
  }
  else{
     alert('please enter valid details')
  }
}

}
