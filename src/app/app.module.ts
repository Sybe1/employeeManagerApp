import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { EmployeeService } from './employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule 
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
