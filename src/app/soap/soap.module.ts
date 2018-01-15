import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { SoapService } from './soap.service';
import { FormComponent } from './form/form.component';
import { DetailResolve } from './detail/detail.resolve';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ListComponent, DetailComponent, FormComponent],
  providers: [SoapService, DetailResolve]
})
export class SoapModule { }
