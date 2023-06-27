import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  AllUser!: any;
  oldDate = new Date(2023, 5, 25)
  todaydate = new Date()
  
  
  constructor(private httpSer: UserService, ) {}
  ngOnInit(): void {
    this.httpSer.getUsers().subscribe((res: any) => {
      console.log(res.data);
      this.AllUser = res.data;
    })
  }

  deleteUser(id: number) {
    this.httpSer.deleteHendale(id).subscribe((res) => {
      console.log("Delete User form dataBase:", res);
      this.httpSer.getUsers().subscribe((res: any) => {
        console.log("Delete After Fetch Data", res.data);
        this.AllUser = res.data
      })
    })
  }

  

}

