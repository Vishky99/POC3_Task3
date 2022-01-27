import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserSrvcService } from '../user-srvc.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  name: string;
  surname: string;
  pincode: string;

  constructor(private userService: UserSrvcService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data),
      this.getUsers();
    })
  }

  permDeleteUser(id: number){
    this.userService.permDeleteUser(id).subscribe( data => {
      console.log(data),
      this.getUsers();
    })
  }

  SearchName(){
    if(this.name == ""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  SearchSurname(){
    if(this.surname == ""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res => {
        return res.surname.toLocaleLowerCase().match(this.surname.toLocaleLowerCase());
      })
    }
  }

  SearchPincode(){
    if(this.pincode == ""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res => {
        return res.pincode.toLocaleLowerCase().match(this.pincode.toLocaleLowerCase());
      })
    }
  }

  key: string = 'id';
  reverse: boolean = false;

  Sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
