import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private userSer:UserService, private auth:StorageService){}
  ngOnInit(): void {
    this.userSer.user_profile().subscribe((res:any)=>{
console.log("profile:",res);

    })
  }

}
