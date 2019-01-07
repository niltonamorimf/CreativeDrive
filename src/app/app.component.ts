import { Component } from '@angular/core';
import { ListService } from './services/list/list.service';
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

  public productList = [];

  public selectedProducts = [];


  constructor(
    private _listService: ListService,
    private _productService: ProductService
  ) {
    this.fetchFirstsProducts();
  }

  // product

  public fetchFirstsProducts() {

    this._productService.products

      .subscribe( res => {

        this.productList = this._listService.getFirsts(10, res);

    });

  }

  public onOpenDetail(product) {

    this._productService.getProduct(product.sku)

      .subscribe(

        res => this.openedItem = res,

        err => console.log('error', err)

      );

  }

  onSaveQuotes(product) {

    this._productService.saveQuotes(product)

      .subscribe(

        res => this.fetchFirstsProducts(),

        err => console.error('error: ', err)

      );
  }

  public validateProduct(product) {


    return product && product.quotes.filter( q => this.isQuoteValid(q)).length === product.quotes.length;

  }

  public isQuoteValid(quote) {

    if (quote.price > 0 && quote.type !== 'QUALITY_ASSURANCE') {

      return true;

    } else if (quote.price >= 0 && quote.type === 'QUALITY_ASSURANCE') {

      return true;

    }

    return false;

  }

  public selectProduct(sku) {

    if (this.selectedProducts.indexOf(sku) < 0) {

      this.selectedProducts.push(sku);

    } else {

      this.selectedProducts = this.selectedProducts.filter( s => s !== sku);

    }
  }

  public onSubmitProducts() {

    this._productService.chargeProducts(this.selectedProducts)

      .subscribe( res => {

        if (res && res.success) {

          this.selectedProducts = [];

        } else {

          console.error('error');

        }

      });

  }
}
