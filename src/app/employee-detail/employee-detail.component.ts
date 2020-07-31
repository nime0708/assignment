import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: [ './employee-detail.component.scss' ]
})
export class EmployeeDetailComponent implements OnInit {
    employee: Employee;
    isNew = true;

    formControls: any = {};
    form: FormGroup;
    formSubmitted = false;

    messages = {
        required: 'This is a required field',
        min: 'Minimun length critera failed',
        phone: 'Not a valid phone number'
    };

    goToList(): void {
        this.router.navigate([ '' ]);
    }

    addEmployee(): void {
        this.employeeService.addEmployee(this.employee);
        this.goToList();
    }

    updateEmployee(): void {
        this.employeeService.editEmployee(this.employee);
        this.goToList();
    }

    updateForm(event: Event): boolean {
        this.formSubmitted = true;
        event.preventDefault();
        if (this.form.invalid) {
            return;
        }
        this.employee = Object.assign(this.employee, this.form.value);
        if (this.isNew) {
            this.addEmployee();
        } else {
            this.updateEmployee();
        }
        return false;
    }

    updateEmployeeObject() {}

    createFormGroup(employee: Employee) {
        this.form = this.fb.group({
            name: [ employee.name, [ Validators.required, Validators.minLength(4) ] ],
            phone: [
                employee.phone,
                [ Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$') ]
            ],
            address: this.fb.group({
                city: [ employee.address.city ],
                address_line1: [ employee.address.address_line1 ],
                address_line2: [ employee.address.address_line2 ],
                postal_code: [ employee.address.postal_code ]
            })
        });
        this.formControls = this.form.controls;
    }

    hasErrorCheck(field: FormControl): boolean {
        return field.errors && (field.dirty || field.touched || this.formSubmitted);
    }

    hasSuccessCheck(field: FormControl): boolean {
        return field.valid && (field.dirty || field.touched || this.formSubmitted);
    }

    constructor(
        private router: Router,
        private employeeService: EmployeeService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.employee = { address: {} } as Employee;
        this.activatedRoute.params.subscribe((params) => {
            const empId = +params.id;
            if (empId) {
                const emp = this.employeeService.getEmployee(empId);
                if (emp) {
                    this.employee = emp;
                    this.isNew = false;
                }
            }
            this.createFormGroup(this.employee);
        });
    }
}
