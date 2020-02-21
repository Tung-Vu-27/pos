import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { EmployeeFormComponent } from "./components/employees/employee-form/employee-form.component";
import { EmployeeListComponent } from "./components/employees/employee-list/employee-list.component";
import { EmployeeService } from "./services/employee.service";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SalesUIComponent } from "./components/sales-ui/sales-ui.component";
import { AdminUIComponent } from "./components/admin-ui/admin-ui.component";
import { Globals } from "./globals";
import { ItemsDisplayComponent } from "./components/sales-ui/items-display/items-display.component";
import { RegisterComponent } from "./components/sales-ui/register/register.component";
import { MenuBtnsComponent } from "./components/sales-ui/menu-btns/menu-btns.component";
import { RegisterService } from "./services/register.service";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    NavbarComponent,
    SalesUIComponent,
    AdminUIComponent,
    ItemsDisplayComponent,
    RegisterComponent,
    MenuBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    })
  ],
  providers: [EmployeeService, RegisterService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
