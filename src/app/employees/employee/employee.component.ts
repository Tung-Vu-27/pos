import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.resetForm();
  }

  // ? means nullable i.e. form is nullable
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData = {
      EmployeeID: null,
      FirstName: "",
      LastName: ""
    };
  }
}
