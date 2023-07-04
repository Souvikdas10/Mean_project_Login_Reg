import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginvalue!: FormGroup
  constructor(private UserSer: UserService,
    private router: Router,
    private storeService:StorageService
  ) { }
  ngOnInit(): void {
    this.loginvalue = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })

  }

  visible: boolean = true;
  changetype: boolean = true;
  viewpass() {
    this.visible = !this.visible
    this.changetype = !this.changetype
  }

  submitData() {
    // alert("Login successfully")
    // console.log("User Login Successfull:", this.loginvalue.value);

    this.UserSer.loginUser(this.loginvalue.value).subscribe((res: any) => {
      console.log("login:", res);
      // alert("Login successfully")
      if (res.status == 200) {
        alert("Successfully LogIn")
        this.storeService.setData(res.user.name,
          res.user.email,
          res.user.phone,
          res.token);
        this.router.navigate(['/profile'])
        // this.router.navigateByUrl('/view-User')

      } else {
        alert("Something went wrong! Try Again!")
      }
    })
  }
}
