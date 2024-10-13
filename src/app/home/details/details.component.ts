import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../authmodule/user.service';

export interface UserList {
  id: string;
  userName: string;
  userEmail: string;
  userType: string;
  userPass: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {

  // DUP_DATA = [
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'satheesh', userEmail: 'satheesh@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'abcde', userEmail: 'abcde@3', userType: 'user', userPass: 'Abcd@2' },
  //   { userName: 'efgh', userEmail: 'efgh@3', userType: 'user', userPass: 'Abcd@2' },


  // ];

  constructor(private userService:UserService){
  }

  isEdit : boolean = false;
  isAdmin: boolean = false;
  DUP_DATA = [];

  ngAfterViewInit() {
    this.DUP_DATA = JSON.parse(JSON.stringify(this.userService.getUserData()));
    this.dataSource.data = this.DUP_DATA;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    const checkUser = JSON.parse(JSON.stringify(sessionStorage.getItem('Current_User')))
    if(checkUser.userType === 'Admin'){
      this.isAdmin = true;
    }
  }

  displayedColumns: string[] = ['userName', 'userEmail', 'userType', 'userPass', 'action'];
  dataSource = new MatTableDataSource(this.DUP_DATA);
  pageSizeOptions = [2, 10, 25]; 
  selectedPageSize = 5;
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editData : any = [];

  handleEdit( element : any){
    this.isEdit = true;
    this.editData = element;
    console.log(element);
  }

}
