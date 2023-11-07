// data.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectData } from '../store/data.selectors';
import { loadUsers } from '../store/data.actions';
import { UsersStore } from '../data-cs/data-cs.store';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [UsersStore]
})
export class DataComponent implements OnInit{
  users$: any;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectData);
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

}
