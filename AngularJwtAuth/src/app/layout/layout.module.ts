import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/user/user.component';
import {PmComponent} from './components/pm/pm.component';
import {AdminComponent} from './components/admin/admin.component';
import {CreateDressComponent} from './components/create-dress/create-dress.component';
import {DressDetailsComponent} from './components/dress-details/dress-details.component';
import {DressListComponent} from './components/dress-list/dress-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from '../navbar/navbar.component';
import {DressService} from './services/dress.service';
import {UserService} from './services/user.service';
import { EditDressComponent } from './components/edit-dress/edit-dress.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    CreateDressComponent,
    DressDetailsComponent,
    DressListComponent,
    EditDressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutRoutingModule
  ],
  exports: [],
  providers: [
    DressService,
    UserService
  ]
})
export class LayoutModule { }
