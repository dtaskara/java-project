import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import {PmComponent} from './components/pm/pm.component';
import {AdminComponent} from './components/admin/admin.component';
import {DressListComponent} from './components/dress-list/dress-list.component';
import {CreateDressComponent} from './components/create-dress/create-dress.component';
import {DressDetailsComponent} from './components/dress-details/dress-details.component';
import {NgModule} from '@angular/core';
import {EditDressComponent} from './components/edit-dress/edit-dress.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'pm',
        component: PmComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      { path: 'dress/add',
        component: CreateDressComponent
      },
      {
        path: 'edit/dress/:id',
        component: EditDressComponent
      },
      { path: 'dress/details/:id',
        component: DressDetailsComponent
      },
      {
        path: 'dresses',
        component: DressListComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {

}
