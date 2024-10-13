import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../authmodule/user.service';
import { log } from 'console';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent{

  constructor(private userService: UserService){}

  @Input() editData :any;


  handleEditData(){
      const index = this.userService.getUserData().findIndex(user => user.id === this.editData.id)
      console.log("Index",index);
      
      const existingData = this.userService.getUserData()
      console.log("existing Data",existingData);
      
      if (index !== -1) {
        // this.users[index] = { ...this.users[index], ...updatedData };
        existingData[index] = {...existingData[index], ...this.editData}
      }

      console.log("updated Data",existingData);
      console.log("get",this.userService.getUserData());
      
      
  }

}
