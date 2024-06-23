import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'mrt-not-found',
  standalone: true,
  imports: [
    RouterLink,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  router = inject(Router);

  onReturn() {
    localStorage.getItem('user') ? this.router.navigateByUrl("/home") : this.router.navigateByUrl("/login");
  }
}
