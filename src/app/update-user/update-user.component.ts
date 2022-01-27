import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserSrvcService } from '../user-srvc.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User = new User();

  constructor(private userService: UserSrvcService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });
  }

  onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.goToHome();
    },
    error => console.log(error)
    );
  }

  goToHome(){
    this.router.navigate(['/users']);
  }

}
