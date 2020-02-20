import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { Router, NavigationEnd } from "@angular/router";
import { Globals } from '../globals';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger("project1", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate("200ms ease-in", style({ opacity: "1" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ]),
    trigger("project2", [
      transition(":enter", [
        style({ opacity: "0"  }),
        animate("200ms 100ms ease-in", style({ opacity: "1" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ]),
    trigger("project3", [
      transition(":enter", [
        style({ opacity: "0"  }),
        animate("200ms 200ms ease-in", style({ opacity: "1" }))
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  slideIn: boolean = false;

  constructor(private router: Router, globals: Globals) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.slideInProjects();
      }
    });

    globals.title = "Projects";
  }

  ngOnInit() {}

  slideInProjects() {
    this.slideIn = !this.slideIn;
  }
}
