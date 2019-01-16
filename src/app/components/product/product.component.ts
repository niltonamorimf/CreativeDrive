import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list/list.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-component-q2',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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

  ngOnInit() {
  }

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

    if(product.quotes.filter( q => this.isQuoteValid(q)).length !== product.quotes.length){ // Produdo desvalidado tem a seleção removida
      this.selectedProducts = this.selectedProducts.filter( s => s !== product.sku);
    }

    return product && product.quotes.filter( q => this.isQuoteValid(q)).length === product.quotes.length;

  }

  public isQuoteValid(quote) {

    if (quote.price > 0 && quote.type !== 'QUALITY_ASSURANCE') {

      return true;

    } else if (quote.price >= 0 && quote.type === 'QUALITY_ASSURANCE') {

      return true;

    } else {

      return false;

    }

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
