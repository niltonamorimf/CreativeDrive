import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'app-user-component-q1',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  set selectedUser(user) {

    this._selectedUser = user;

  }

  private _selectedUser;

  get selectedUser() {

    return this._selectedUser;

  }


  displayedList = [];

  selected = [];

  constructor(
    private _userService: UserService,
    private _listService: ListService
  ) {
    this.displayedList = _listService.getFirsts(10, _userService.users);
    this.selected = [_listService.getItem((e) => e._id === 54844 , _userService.users)];
  }

  ngOnInit() {
  }

  isRowEven(index) {

    return index % 2 === 0;

  }

  isRowSelected(id) {

    return this.selected.find( (e) => e._id === id);

  }

  selectUserRow(userFromList) {

    const user = {...userFromList};

    if (this.selected.find( u => u === user)) {

      this.selected = this.selected.filter( u => u !== user);

    } else {

      this.selected.push(user);

    }
  }

  onOpenUserDetail(id) {

    let user = null;

    this._userService.getUser(id)

      .subscribe( res => this.selectedUser = res);

    // this.selectedUser = user;

  }

}
