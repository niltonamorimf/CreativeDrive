import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ApiModule } from '../api/api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
