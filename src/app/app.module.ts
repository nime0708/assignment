import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        PhoneFormatPipe,
        EmployeeContainerComponent
    ],
    imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
