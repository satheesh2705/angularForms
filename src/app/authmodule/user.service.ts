import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor() { }

  private userData : any [] = []; 
  
  setUserData(data: any) {
    this.userData.push(data)
  }

  getUserData() {
    return this.userData;
  }

}
