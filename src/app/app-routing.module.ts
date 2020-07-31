import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';

const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeContainerComponent,
        children: [
            { path: 'add', component: EmployeeDetailComponent },
            {
                path: '',
                component: EmployeeListComponent
            },
            {
                path: 'edit/:id',
                component: EmployeeDetailComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'employees'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
