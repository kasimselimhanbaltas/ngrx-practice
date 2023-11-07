import { Component } from '@angular/core';
import { UsersStore } from './data-cs.store';

@Component({
  selector: 'app-data-cs',
  templateUrl: './data-cs.component.html',
  styleUrls: ['./data-cs.component.css'],
  providers: [UsersStore]
})
export class DataCsComponent {

  users$ = this.usersStore.users$;
 
  constructor(private readonly usersStore: UsersStore) {
    this.usersStore.getUsers();
  }

  
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

}
