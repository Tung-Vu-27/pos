import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState  } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Globals } from '../globals';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  globals: Globals;
  handSetState: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit() {
      this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.handSetState = false;
        } else {
          this.handSetState = true;
        }
      });
    }
    
  constructor(private breakpointObserver: BreakpointObserver, globals: Globals) {
    this.globals = globals;
  }

}
