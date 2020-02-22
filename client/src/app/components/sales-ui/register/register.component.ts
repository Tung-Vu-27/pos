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
    this.salesService.refreshSalesList();
    this.registerService.refreshNum();
  }

  // Method to make complete cash sale. This method will interact with salesService to add new sale to database.
  cashSale() {
    this.checkInProgress();
    if (this.registerService.total != 0) {
      if (this.registerService.inputNum < this.registerService.total) {
        this.toastr.error("Payment amount is less than total owed.", "INVALID");
      } else {
        this.registerService.change =
          this.registerService.inputNum - this.registerService.total;

        // Create sale from service
        this.salesService
          .createSale(
            this.registerService.total,
            "Cash",
            this.registerService.inputNum,
            this.registerService.change
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

  // Method to make complete credit sale. This method will interact with salesService to add new sale to database.
  creditSale() {
    this.checkInProgress();
    if (this.registerService.total != 0) {
      this.registerService.change = 0;
      this.registerService.inputNum = 0;

      // Create sale from service
      this.salesService
        .createSale(
          this.registerService.total,
          "Credit",
          this.registerService.inputNum,
          this.registerService.change
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
      this.registerService.reset();
      this.registerService.inProgress = true;
    }
  }

  // Numpad btn methods
  pressZero() {
    this.checkInProgress();
    this.registerService.inputStr += "0";
    this.registerService.refreshNum();
  }

  pressOne() {
    this.checkInProgress();
    this.registerService.inputStr += "1";
    this.registerService.refreshNum();
  }

  pressTwo() {
    this.checkInProgress();
    this.registerService.inputStr += "2";
    this.registerService.refreshNum();
  }

  pressThree() {
    this.checkInProgress();
    this.registerService.inputStr += "3";
    this.registerService.refreshNum();
  }

  pressFour() {
    this.checkInProgress();
    this.registerService.inputStr += "4";
    this.registerService.refreshNum();
  }

  pressFive() {
    this.checkInProgress();
    this.registerService.inputStr += "5";
    this.registerService.refreshNum();
  }

  pressSix() {
    this.checkInProgress();
    this.registerService.inputStr += "6";
    this.registerService.refreshNum();
  }

  pressSeven() {
    this.checkInProgress();
    this.registerService.inputStr += "7";
    this.registerService.refreshNum();
  }

  pressEight() {
    this.checkInProgress();
    this.registerService.inputStr += "8";
    this.registerService.refreshNum();
  }

  pressNine() {
    this.checkInProgress();
    this.registerService.inputStr += "9";
    this.registerService.refreshNum();
  }

  pressPoint() {
    this.checkInProgress();
    this.registerService.inputStr += ".";
    this.registerService.refreshNum();
  }

  pressDel() {
    this.checkInProgress();
    this.registerService.inputStr = "0";
    this.registerService.refreshNum();
  }
}
