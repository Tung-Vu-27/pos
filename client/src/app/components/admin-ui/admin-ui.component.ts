import { Component, OnInit, ViewChild } from "@angular/core";
import { Globals } from "../../globals";
import { SalesService } from "../../services/sales.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-admin-ui",
  templateUrl: "./admin-ui.component.html",
  styleUrls: ["./admin-ui.component.scss"]
})
export class AdminUIComponent implements OnInit {
  displayedColumns: string[] = ["id", "total", "date"];
  dataSource = new MatTableDataSource(this.service.salesList);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.service.refreshSalesList();
    this.dataSource.sort = this.sort;
  }

  constructor(globals: Globals, public service: SalesService) {
    globals.page = "admin";
  }
}
