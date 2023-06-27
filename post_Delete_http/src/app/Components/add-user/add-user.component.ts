import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formValue!: FormGroup;
  selectedImg!: any;
  constructor(private httpSer: UserService,
    private router:Router
    ) { }
  ngOnInit(): void {
    this.formValue = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
    })
  }
  visible:boolean=true;
  changetype:boolean=true;
  viewpass(){
    this.visible=!this.visible
    this.changetype=!this.changetype
  }
  onFileSelection(event: any) {
    this.selectedImg = event.target.files[0]
    console.log("Selected Image:", this.selectedImg);
  }
  submitData() {
    // alert("Submitted Successfully");
    console.log("Formdata:", this.formValue.value);

    const formData: FormData = new FormData()
    formData.append('name', this.formValue.value.name)
    formData.append('email', this.formValue.value.email)
    formData.append('phone', this.formValue.value.phone)
    formData.append('password', this.formValue.value.password)
    formData.append('image', this.selectedImg, this.selectedImg.name)

    this.httpSer.PostUser(formData).subscribe((res: any) => {
      console.log("Respond after post:", res);

      if (res.status == 200) {
        alert("Successfully Registered")
        this.router.navigateByUrl('/login')

      } else {
        alert("Something went wrong! Try Again!")
      }

    })
  }
}
