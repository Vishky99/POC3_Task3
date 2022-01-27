import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserSrvcService } from '../user-srvc.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserSrvcService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.addUser(this.user).subscribe( data => {
      console.log(data);
      this.goToHome();
    },
    error => console.log(error));
  }

  goToHome(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
