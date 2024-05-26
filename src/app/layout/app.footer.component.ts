import {Component, inject} from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule
  ],
  templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
  layoutService = inject(LayoutService);
}
