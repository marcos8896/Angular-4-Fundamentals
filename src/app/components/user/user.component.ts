import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  isEdit:boolean;
  posts:Post[];

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.name    = 'Marcos Barrera';
    this.age     = 21;
    this.email   = "marcos@gmail.com"

    this.address = {
      street:      'My street #51',
      city:        'Guadalajara City',
      state:       'Jalisco'
    }

    this.hobbies = ['Write code', 'Play videogames', 'Read some books'];

    this.isEdit = false;

    this.dataService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    });
  }
  
  clickMe(someString:string){
    console.log(`You've passed a string with the value of: ${someString}`);
  }

  addHobby(hobby:string){
    this.hobbies.push(hobby);
  }

  deleteHobby(index:number){
    this.hobbies.splice(index, 1);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street: string,
  city:   string,
  state:  string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}