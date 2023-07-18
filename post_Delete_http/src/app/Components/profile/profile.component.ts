import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};
  img_path: any = "";
  baseURL: string = "http://localhost:7852/"
  folderPath: string = "upload/"
  constructor(private userSer: UserService, private auth: StorageService) { }
  ngOnInit(): void {
    this.userSer.user_profile().subscribe((res: any) => {
      this.userDetails=res.data
      console.log("all user:",this.userDetails);
      
      if (this.userDetails.image == "undefined" || this.userDetails.image == "") {
        this.img_path = "assets/Image/demo.png"
      } else {
        this.img_path = this.baseURL + this.folderPath + this.userDetails.image;
        console.log("finally fetch:", this.img_path);
        // console.log("image:",this.userDetails.profile_pic);
      }

    })
  }

}
