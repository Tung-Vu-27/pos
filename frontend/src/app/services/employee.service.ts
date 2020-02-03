import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  formData: Employee;
  employeeList: Employee[];

  readonly rootURL = "https://localhost:44338/api";

  constructor(private http: HttpClient) {}

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL + "/Employee", formData);
  }

  refreshList() {
    this.http
      .get(this.rootURL + "/Employee")
      .toPromise()
      .then(res => (this.employeeList = res as Employee[]));
  }

  putEmployee(formData: Employee) {
    return this.http.put(
      this.rootURL + "/Employee/" + formData.EmployeeID,
      formData
    );
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.rootURL + "/Employee/" + id);
  }
}
