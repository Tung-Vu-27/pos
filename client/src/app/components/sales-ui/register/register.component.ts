import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../../../services/register.service";
import { SalesService } from "../../../services/sales.service";
import { ToastrService } from "ngx-toastr";
import { Sales } from "../../../models/sales.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private salesService: SalesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerService.refreshValues();
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

  // Method to make complete sale. This method will interact with salesService to add new sale to database.
  cashSale() {
    if (this.registerService.total != 0) {
      if (this.inputNum < this.registerService.total) {
        this.toastr.error("Payment amount is less than total owed.", "INVALID");
      } else {
        let newSale = new Sales();

        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        var time =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        var dateTime = date + " " + time;

        newSale.Date = dateTime;
        newSale.Total = this.registerService.total;

        this.salesService.createSale(newSale).subscribe(
          data => console.log(data),
          error => console.log(error)
        );

        this.toastr.success("Purchase completed.", "SUCCESS");
      }
    }
  }

  creditSale() {
    if (this.registerService.total != 0) {
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
