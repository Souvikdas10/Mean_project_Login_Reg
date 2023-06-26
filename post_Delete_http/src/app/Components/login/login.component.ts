import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginvalue!: FormGroup
  constructor(private UserSer: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loginvalue = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })

  }
  submitData() {
    // alert("Login successfully")
    console.log("User Login Successfull:", this.loginvalue.value);

    this.UserSer.loginUser(this.loginvalue.value).subscribe((res: any) => {
      console.log("login:", res.result);
      // alert("Login successfully")
      if (res.status == 200) {
        alert("Successfully LogIn")
        this.router.navigateByUrl('/view-User')

      } else {
        alert("Something went wrong! Try Again!")
      }
    })
  }
}
