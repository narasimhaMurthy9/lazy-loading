import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardServiceService } from '../services/gaurds/auth-guard-service.service';
import { UsersComponent } from './users/users.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { CarrierListComponent } from './carrier-list/carrier-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuardServiceService],
    component: UsersComponent,
    children: [
      {
        path: 'shipper-list',
        component: ShipperListComponent,
      },
      {
        path: 'carrier-list',
        component: CarrierListComponent,
      },
      { path: ':id/:name', component: UserComponent },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDataRoutingModule { }
