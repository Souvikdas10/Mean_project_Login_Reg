import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:"add-User",component:AddUserComponent},
  {path:"login",component:LoginComponent},
  {path:"view-User",component:ViewUserComponent},
  {path:"profile",component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
