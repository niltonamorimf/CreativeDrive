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

  public tabSelected = 'homeTab';

  public displayedList = [];

  constructor(
    private _listService: ListService,
    private _userService: UserService) {
    this.displayedList = _listService.getFirsts(10, _userService.users);
  }

  isVisible(element: HTMLDivElement) {
    return element.id === this.tabSelected ? 'show active' : '';
  }

  isSelected(element: HTMLDivElement) {
    return element.id === `pills${this.tabSelected}` ? 'active' : '';
  }

  isRowEven(index) {
    return index % 2 === 0 ? 'list-group-item-light' : 'list-group-item-dark';
  }

  selectTab(str: string) {
    this.tabSelected = str;
  }
}
