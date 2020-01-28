import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = "https://localhost:44338/api/";

  constructor(private http: HttpClient) {}

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + "Employee", formData);
  }
}
