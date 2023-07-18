import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Classes/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User_get_api = "http://localhost:7852/getemp";

  User_reg_api = "http://localhost:7852/addemp";

  User_log_api = "http://localhost:7852/logemp";

  User_edit_api = "http://localhost:7852/editemp";

  User_update_api = "http://localhost:7852/updateemp";

  User_del_api = "http://localhost:7852/deleteemp";

  profile_api="http://localhost:7852/profile"
  
  constructor(private http: HttpClient, private auth:StorageService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.User_get_api);
  }

  PostUser(postData: any): Observable<User[]> {
    return this.http.post<User[]>(this.User_reg_api, postData)
  }

loginUser(formData:any):Observable<User[]>{
  return this.http.post<User[]>(this.User_log_api,formData)
}

  
  deleteHendale(id: any): Observable<User[]> {
    return this.http.delete<User[]>(`${this.User_del_api}/${id}`)
  }


  user_profile(): Observable<User[]> {
    return this.http.get<User[]>(this.User_get_api, {
      headers: new HttpHeaders({
        'x-access-token': `${this.auth.getToken()}`
      })
    })
  }
}
