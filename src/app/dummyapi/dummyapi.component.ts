import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummyapi',
  templateUrl: './dummyapi.component.html',
  styleUrls: ['./dummyapi.component.css']
})

export class DummyapiComponent implements OnInit {
apiResponse: any =[];
apires:any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  callApi1(){
    this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").subscribe(res=>{
     console.log(res) 
    this.apiResponse=res;
  },err=>{
      console.log(err)
    }
    ) 
  }
  callApi2(){
    this.http.get("https://api.nationalize.io?name=nathaniel").subscribe(res=>{
      this.apiResponse=res;
    },err=>{
      console.log(err)
    })
  }
  callApi3(){
    this.http.get("https://api.publicapis.org/entries").subscribe(res=>{

      this.apiResponse=res;
    },err=>{
      console.log(err)
    })
  }

}
