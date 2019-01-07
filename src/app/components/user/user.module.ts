import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserServiceModule } from '../../services/user/user-service.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserServiceModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
