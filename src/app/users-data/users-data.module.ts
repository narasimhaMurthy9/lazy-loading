import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { CarrierListComponent } from './carrier-list/carrier-list.component';
import { UsersDataRoutingModule } from './users-data-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    ShipperListComponent,
    CarrierListComponent
  ],
  imports: [
    CommonModule,
    UsersDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UsersDataRoutingModule
  ]
  // if we need to use the components in this module to app module or for other module we need to export it form this module
})
export class UsersDataModule { }
