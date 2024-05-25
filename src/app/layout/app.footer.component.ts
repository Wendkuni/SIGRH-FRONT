import {Component, inject} from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
  layoutService = inject(LayoutService);
}
