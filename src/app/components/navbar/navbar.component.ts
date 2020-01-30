import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {


  constructor(public globals: Globals) {

  }

  ngOnInit() {}

  // Method returns style class based on navbar Globals state
  setSales() {
    let activeClass = {
      sales: this.globals.page === "sales"
    };
    return activeClass;
  }

  setAdmin() {
    let activeClass = {
      admin: this.globals.page === "admin"
    };
    return activeClass;
  }
}
