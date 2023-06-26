import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Service/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { EditComponent } from './Components/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewUserComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
