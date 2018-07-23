import { Component, OnInit } from '@angular/core';
import {DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:address;
  hobbies:string[];
  hello:any;
  post:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log("constructor ran");
   }


  ngOnInit() {
    console.log("ngOnInit ran");
    this.name="michael jackson";
    this.age = 30;
    this.email = "example@g.com"
    this.address ={
      street: "baker street",
      city: "london",
      state: "ENG"

    }

    this.hobbies =["write code","watch movies","listen to music"];
    this.hello = 34;


    this.dataService.getPosts().subscribe((posts)=>{
      console.log(posts);
      this.post = posts;
     
    });
  }
  onClick(){
    this.name="sherlock holmes";
    this.hobbies.push("New Hobby");
  }

  toggleEdit(){
    this.isEdit =!this.isEdit;
  }


  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i< this.hobbies.length;i++){
      if(this.hobbies[i] ==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}


interface address{
  street:string,
  city:string,
  state:string
}
interface Post{
  id:number,
  title:string,
  body:string,
  userId:number


}