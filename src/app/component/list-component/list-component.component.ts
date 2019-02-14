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

  public list: User[];

  constructor(private store: Store<any>) {
    /** 订阅 **/
    this.store.select('list').subscribe(_list => {
      if (_list) {
        // console.log(_list);
        // console.log(_list.list);
        this.list = _list.list;
      }
    });
  }

  removeUser(id) {
    console.log('第一步骤,(view)事件触发状态发生变化,删除记录[标识符]：', id);
    this.store.dispatch(new listAction.RemoveUser(id));
  }

  ngOnInit() {
    this.store.dispatch(new listAction.Load());
  }

}
