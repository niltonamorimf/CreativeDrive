import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ListModule } from 'src/app/services/list/list.module';
import { ProductServiceModule } from 'src/app/services/product/product-service.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ListModule,
    ProductServiceModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
