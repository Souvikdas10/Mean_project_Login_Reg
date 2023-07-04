import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setData(name: string, email: string, phone: string, token: string) {
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('phone', phone);
    window.sessionStorage.setItem('token', token);
  }
  getData() {
    const saveData = [];
    let data = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      phone: window.localStorage.getItem('phone')
    }
    saveData.push(data);
    return saveData;
  }
  getToken() {
    return window.sessionStorage.getItem('token');
  }
}
