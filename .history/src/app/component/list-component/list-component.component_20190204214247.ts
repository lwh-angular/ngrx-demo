import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Store} from '@ngrx/store';
import * as listAction from '../../actions/list';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  public list: User[] = [{id: 1, name: 'lwh'}, {id: 3, name: '李文浩'}];

  constructor(private store: Store<any>) {
    this.store.select('list').subscribe(_list => {
      if (_list) {
        console.log(_list);
        console.log(_list.list);
        this.list = _list.list;
      }
    });
  }

  removeUser(id) {
    console.log(id);
    this.store.dispatch(new listAction.RemoveUser(id));

  }

  ngOnInit() {
    this.store.dispatch(new listAction.Load());
  }

}
