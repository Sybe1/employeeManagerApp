import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'info', component: InfoComponent},
    { path: 'employee', component: EmployeeComponent},
    { path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }