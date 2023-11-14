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

  constructor(private employeeService:EmployeeService) {
  }

  ngOnInit() {
  } 
}
