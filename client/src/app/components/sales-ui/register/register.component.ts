import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../../../services/register.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private service: RegisterService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.service.refreshValues();
    this.refreshNum();
  }

  // Used for concatenating input numbers with decimals
  inputStr: string = "0";

  // Used after all conversions to display string
  displayNum: string = "";

  // Will be used in refreshNum() method and used for completing purchase
  inputNum: number = 0;

  // Method used to force string to show 2 digit decimal
  refreshNum() {
    this.inputNum = parseFloat(this.inputStr);
    this.displayNum = (Math.floor(this.inputNum * 100) / 100).toFixed(2);
  }

  // Method to make complete sale. This method will interact with backend to add new sale.
  cashSale() {
    if (this.service.total != 0) {
      if (this.inputNum < this.service.total) {
        this.toastr.error("Payment amount is less than total owed.", "INVALID");
      } else {
        this.toastr.success("Purchase completed.", "SUCCESS");
      }
    }
  }

  creditSale() {
    if (this.service.total != 0) {
      this.toastr.success("Purchase completed.", "SUCCESS");
    }
  }

  // Numpad btn methods
  pressZero() {
    this.inputStr += "0";
    this.refreshNum();
  }

  pressOne() {
    this.inputStr += "1";
    this.refreshNum();
  }

  pressTwo() {
    this.inputStr += "2";
    this.refreshNum();
  }

  pressThree() {
    this.inputStr += "3";
    this.refreshNum();
  }

  pressFour() {
    this.inputStr += "4";
    this.refreshNum();
  }

  pressFive() {
    this.inputStr += "5";
    this.refreshNum();
  }

  pressSix() {
    this.inputStr += "6";
    this.refreshNum();
  }

  pressSeven() {
    this.inputStr += "7";
    this.refreshNum();
  }

  pressEight() {
    this.inputStr += "8";
    this.refreshNum();
  }

  pressNine() {
    this.inputStr += "9";
    this.refreshNum();
  }

  pressPoint() {
    this.inputStr += ".";
    this.refreshNum();
  }

  pressDel() {
    this.inputStr = "0";
    this.refreshNum();
  }
}
