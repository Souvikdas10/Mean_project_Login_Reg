import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:"add-User",component:AddUserComponent},
  {path:"login",component:LoginComponent},
  {path:"view-User",component:ViewUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
