import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DeactiveGaurdService } from '../services/gaurds/deactive-gaurd.service';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent,canDeactivate:[DeactiveGaurdService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
