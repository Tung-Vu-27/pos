import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../../../services/register.service";
import { SalesService } from "../../../services/sales.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    public registerService: RegisterService,
    public salesService: SalesService,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerService.refreshValues();
    this.refreshNum();
  }

  inputStr: string = "0";
  displayNum: string = ""; // Used after all conversions to display string
  inputNum: number = 0;
  change: number = 0;

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
        this.change = this.inputNum - this.registerService.total;

        // Create sale from service
        this.salesService
          .createSale(
            this.registerService.total,
            "Cash",
            this.inputNum,
            this.change
          )
          .subscribe(
            data => console.log(data),
            error => console.log(error)
          );
        this.registerService.inProgress = false;
        this.toastr.success("Purchase completed.", "SUCCESS");
      }
    }
  }

  creditSale() {
    if (this.registerService.total != 0) {
      this.change = 0;
      this.inputNum = 0;

      // Create sale from service
      this.salesService
        .createSale(
          this.registerService.total,
          "Credit",
          this.inputNum,
          this.change
        )
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      this.registerService.inProgress = false;
      this.toastr.success("Purchase completed.", "SUCCESS");
    }
  }

  // Checks if sale is in progress. If false, reset all values and itemsList.
  checkInProgress() {
    if (this.registerService.inProgress == false) {
      this.inputNum = 0;
      this.change = 0;
      this.displayNum = "";
      this.inputStr = "";
      this.registerService.reset();
      this.registerService.inProgress = true;
    }
  }

  // Numpad btn methods
  pressZero() {
    this.checkInProgress();
    this.inputStr += "0";
    this.refreshNum();
  }

  pressOne() {
    this.checkInProgress();
    this.inputStr += "1";
    this.refreshNum();
  }

  pressTwo() {
    this.checkInProgress();
    this.inputStr += "2";
    this.refreshNum();
  }

  pressThree() {
    this.checkInProgress();
    this.inputStr += "3";
    this.refreshNum();
  }

  pressFour() {
    this.checkInProgress();
    this.inputStr += "4";
    this.refreshNum();
  }

  pressFive() {
    this.checkInProgress();
    this.inputStr += "5";
    this.refreshNum();
  }

  pressSix() {
    this.checkInProgress();
    this.inputStr += "6";
    this.refreshNum();
  }

  pressSeven() {
    this.checkInProgress();
    this.inputStr += "7";
    this.refreshNum();
  }

  pressEight() {
    this.checkInProgress();
    this.inputStr += "8";
    this.refreshNum();
  }

  pressNine() {
    this.checkInProgress();
    this.inputStr += "9";
    this.refreshNum();
  }

  pressPoint() {
    this.checkInProgress();
    this.inputStr += ".";
    this.refreshNum();
  }

  pressDel() {
    this.checkInProgress();
    this.inputStr = "0";
    this.refreshNum();
  }
}
