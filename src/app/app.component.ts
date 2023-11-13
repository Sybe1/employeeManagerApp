import { Component, OnInit } from '@angular/core';
import { Employee } from './employee/employee';
import { EmployeeService } from './employee/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public employees: Employee[] = [];

  updating = false; 

  
  employeeToUpdate = {
    id:0,
    firstName:"",
    lastName:"",
    gender: "",
    email:"",
    jobTitle:"",
    phone:"",
    imageUrl:"",
    employeeCode:""
  }

 

  constructor(private employeeService:EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }


  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
    (response: Employee[]) => {
      this.employees = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message)
    }
    )
  }


  public addEmployee(registerForm: NgForm): void {
    this.employeeService.addEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.getEmployees();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  public deleteEmployee(employee: Employee){
    if(confirm('Are you sure you want to delete this employee?'))
      this.employeeService.deleteEmployee(employee.id).subscribe(
        (resp) => {
          console.log(resp)
          this.getEmployees();
        },
        (err) => {
          console.log(err);
        }
      );
  }


  public editEmployee(employee: Employee){
    this.employeeToUpdate = employee;
  }

  public updateEmployee(){
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe(
      (resp) => {
        console.log(resp)
        this.getEmployees();
      },
      (err) => {
        console.log(err);
      }
    );
  }

 
}
