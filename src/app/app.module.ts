import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
