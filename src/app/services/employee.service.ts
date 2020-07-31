import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employees: Employee[] = [
        {
            id: 1,
            name: 'Jhon',
            phone: '9999999999',
            address: {
                city: 'Pune',
                address_line1: 'ABC road',
                address_line2: 'XYZ building',
                postal_code: '12455'
            }
        },
        {
            id: 2,
            name: 'Jacob',
            phone: 'AZ99A99PQ9',
            address: {
                city: 'Pune',
                address_line1: 'PQR road',
                address_line2: 'ABC building',
                postal_code: '13455'
            }
        },
        {
            id: 3,
            name: 'Ari',
            phone: '145458522',
            address: {
                city: 'Mumbai',
                address_line1: 'ABC road',
                address_line2: 'XYZ building',
                postal_code: '12455'
            }
        }
    ];

    getEmployees(): Employee[] {
        return this.employees;
    }

    getEmployee(id: number): Employee {
        let result = null;
        if (id) {
            const elementId = this.employees.findIndex((employeeItem) => employeeItem.id === id);
            if (elementId > -1) {
                result = this.employees[elementId];
            }
        }
        return result;
    }

    addEmployee(employee: Employee) {
        const currentLength = this.employees.length;
        employee.id = currentLength + 1;
        this.employees.push(employee);
    }

    editEmployee(employee: Employee) {
        const id = employee.id;
        const elementId = this.employees.findIndex((employeeItem) => employeeItem.id === id);
        this.employees[elementId] = employee;
    }
}
