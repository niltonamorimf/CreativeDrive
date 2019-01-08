import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserServiceModule } from '../../services/user/user-service.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserServiceModule,
    AngularFontAwesomeModule,
  ],
  exports: [UserComponent]
})
export class UserModule { }
