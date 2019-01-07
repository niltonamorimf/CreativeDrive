import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule } from './services/list/list.module';
import { UserServiceModule } from './services/user/user-service.module';
import { ProductServiceModule } from './services/product/product-service.module';
import { UserModule } from './components/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ListModule,
    UserServiceModule,
    ProductServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
