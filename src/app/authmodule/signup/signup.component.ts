import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  @ViewChild('formDirective') private formDirective!: NgForm;

  activeBtn : boolean = true;
  userForm : FormGroup;
  id !: number;
  

  constructor(private fb: FormBuilder, private userService:UserService) {
    this.userForm = this.fb.group({
      id : this.id,
      userName: ['',[Validators.required,Validators.minLength(5)]],
      userEmail:['',[Validators.required,Validators.email]],
      userPass:['',[Validators.required,Validators.minLength(5)]],
      userType:['',[Validators.required]]
    });
  }

  onSubmit(){
    this.userForm.patchValue({id:this.userService.getUserData().length+1 });
    this.userService.setUserData(this.userForm.value)
    console.log("User Data  ",this.userService.getUserData());
    this.formDirective.resetForm();
    
  }

  toggleButton(){
    this.activeBtn = !this.activeBtn;

  }

 public  userData = {
    id:0  ,
    userName: '',
    userEmail:'',
    userPass: '',
    userType:''
  };


  onSubmitNgForm(form: NgForm){

    if (form.valid) {
     
      const tempData = this.userService.getUserData();
      const id = tempData.length > 0 ? tempData.length+1 : 1;
      this. userData = {...this.userData, id}
      this.userService.setUserData({...this.userData})
      console.log('User Data:',this.userService.getUserData());
      form.resetForm();
    } else {
      console.error('Form is invalid');
    }

  }

}
