import { BreakpointObserver, Breakpoints  } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  isLargeScreen: boolean = false;
  isSidenavOpen: boolean = false;
  showCloseButton: boolean = false;
  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    // Observe changes to screen width and update `isLargeScreen` accordingly
    this.observer.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium])
      .subscribe(result => {
        this.isLargeScreen = !result.matches;
        this.isSidenavOpen = this.isLargeScreen;
        this.showCloseButton = !this.isLargeScreen && this.isSidenavOpen;
      });
  }


  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.showCloseButton = !this.isLargeScreen && this.isSidenavOpen;
  }
}
