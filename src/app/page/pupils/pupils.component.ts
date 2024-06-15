import { Component } from '@angular/core';
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-pupils',
  standalone: true,
  imports: [
    MatTabNav,
    MatTabNavPanel,
    MatTabLink,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './pupils.component.html',
  styleUrl: './pupils.component.scss'
})
export class PupilsComponent {

  constructor(private router: Router) {
  }

  isCurrentRoute(route: string): boolean {
    if (route.endsWith('/**')){
      return this.router.url.startsWith(route.replace('/**', ''));
    }
    return this.router.url === route;
  }

  route() {
    this.router.navigate(['dashboard', 'pupils'])
  }
}
