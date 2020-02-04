import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"]
})
export class EmployeeFormComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  // ? means nullable i.e. form is nullable
  resetForm(form?: NgForm) {
    this.service.formData = {
      EmployeeID: null,
      FirstName: "",
      LastName: "",
      Position: "",
      HourlyRate: 8.15,
      HoursWorked: 0,
      TotalPay: 0
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) this.insertRecord(form);
    else this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success("New employee added", "REGISTER");
      this.service.refreshList();
      this.resetForm(form);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info("Employee updated", "EDIT");
      this.service.refreshList();
      this.resetForm(form);
    });
  }
}
