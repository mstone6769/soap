import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { SoapService } from './soap.service';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './detail/view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':id',
    component: DetailComponent,
    data: {
      title: 'boom town'
    },
  },
  {
    path: ':id/edit',
    component: EditComponent,
    data: {
      title: 'boom town'
    },
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ListComponent, DetailComponent, FormComponent, ViewComponent, EditComponent],
  providers: [SoapService]
})
export class SoapModule { }
