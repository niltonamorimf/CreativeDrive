import {Component, OnInit, ViewChild} from '@angular/core';
import { ListService } from './services/list/list.service';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  set openedItem(item: any) {
    this._openedItem = item;
  }

  private _openedItem: any;

  get openedItem(): any {
    return this._openedItem;
  }

  public title = 'support-test';

  public displayedList: [any];

  public productList = [];

  public selected = [];

  constructor(
    private _listService: ListService,
    private _userService: UserService,
    private _producService: ProductService
  ) {
    this.displayedList = _listService.getFirsts(10, _userService.users);
    this.selected = [_listService.getItem((e) => e._id === 54844 , _userService.users)];
    this.productList = _listService.getFirsts(10, _producService.products);
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

  public onOpenDetail(product) {
    this.openedItem = product;
  }

  public onCloseModal(detailModal) {
    console.log('detailModal:',detailModal)
  }

  private removeOpenedItem() {
    this.openedItem = null;
  }
}
