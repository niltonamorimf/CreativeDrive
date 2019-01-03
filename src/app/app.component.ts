import {Component, ElementRef} from '@angular/core';
import { ListService } from './services/list/list.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'support-test';

  public tabSelected = 'profileTab';

  public displayedList: [any];

  public selected = [];

  public cardItems = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];

  constructor(
    private _listService: ListService,
    private _userService: UserService) {
    this.displayedList = _listService.getFirsts(10, _userService.users);
    this.selected = [54844];

  }

  isVisible(element: HTMLDivElement) {
    return element.id === this.tabSelected ? 'show active' : '';
  }

  isSelected(element: HTMLDivElement) {
    return element.id === `pills${this.tabSelected}` ? 'active' : '';
  }

  isRowEven(index) {
    return index % 2 === 0;
  }

  isRowSelected(id) {
    return this.selected.indexOf(id) !== -1;
  }

  selectUserRow(user) {
    if (this.selected.indexOf(user._id) !== -1) {
      this.selected = this.selected.filter( id => id !== user._id);
    } else {
      this.selected.push(user._id);
    }
  }

  selectTab(str: string) {
    this.tabSelected = str;
  }
}
