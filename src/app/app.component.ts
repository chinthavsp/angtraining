import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
 task ="practice interpolation examples";
 City:String="HYD";  
 public Greetings="";
 public data="";
 sno:any;
 b:boolean=true;
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
  alert('Show button clicked!')
};

 sendit(data:any){
   debugger
   console.log(data)
   

 }

 
}
