import { Component } from '@angular/core';
import { UsersStore } from './data-cs.store';
import { DataApiService } from '../services/data-api.service';
import { Observable } from 'rxjs';
import { user } from '../store/data.state';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-cs',
  templateUrl: './data-cs.component.html',
  styleUrls: ['./data-cs.component.css'],
  providers: [UsersStore]
})
export class DataCsComponent {

  users$: Observable<user[]>;
  userForm: FormGroup;


  constructor(private readonly usersStore: UsersStore, private userService: DataApiService, private fb: FormBuilder) {
    //this.usersStore.getUsers();
    this.users$ = this.userService.getData();
  }

  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

}
