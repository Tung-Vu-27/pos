import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { Router, NavigationEnd } from "@angular/router";
import { Globals } from "../globals";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("200ms ease-in", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ]),
    trigger("slideSide", [
      transition(":enter", [
        style({ transform: "translateX(-120%)" }),
        animate("200ms ease-in", style({ transform: "translateX(0%)" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateX(-100%)" }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  running: boolean = false;
  userInput: string = "";
  visible: boolean = false;
  slideIn: boolean = false;

  constructor(private router: Router, globals: Globals) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.slideInHome();
      }
    });

    globals.title = "Home";
  }

  ngOnInit() {}

  runStyle() {
    let runStyle = {
      on: this.running === true,
      off: this.running === false
    };
    return runStyle;
  }

  runCode() {
    this.running = !this.running;
    this.visible = !this.visible;
  }

  slideInHome() {
    this.slideIn = !this.slideIn;
  }
}
