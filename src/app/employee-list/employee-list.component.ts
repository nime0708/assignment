import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: [ './employee-list.component.scss' ]
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[] = [];
    filterEmployees: Employee[];
    search = '';

    updateSearch() {
        if (this.search) {
            this.filterEmployees = this.employees.filter((emp) => {
                let searchCriteria = emp.name + ' ' + emp.address.city;
                searchCriteria = searchCriteria.toLowerCase();
                return searchCriteria.includes(this.search.toLowerCase());
            });
        } else {
            this.filterEmployees = this.employees.slice();
        }
    }

    constructor(private employeeService: EmployeeService, private router: Router) {}

    ngOnInit(): void {
        this.employees = this.employeeService.getEmployees();
        this.updateSearch();
    }
}
