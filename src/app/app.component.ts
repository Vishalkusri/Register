import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:['.custom{color:blue}']
})
export class AppComponent {
  title = 'Registration Form';
  userData:any={};
  getData(data:NgForm){
    console.warn(data,'haha')
    this.userData=data
  }
//  constructor(){
//  setTimeout(()=>{
//     this.title='AI Software';
//   }, 3000);
 }
 
  // name = 'oodles'
  // birthday = new Date()
  
//}


