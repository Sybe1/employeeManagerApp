import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    { path: 'info', component: InfoComponent},
    { path: 'employee', component: EmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }