import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { Employee } from "src/app/models/employee.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(employee: Employee) {
    // Object.assign prevents two-way binding from automatically updating while users are editing info
    this.service.formData = Object.assign({}, employee);
  }

  deleteEmp(id: number) {
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning("Employee removed", "DELETE");
    });
  }
}
