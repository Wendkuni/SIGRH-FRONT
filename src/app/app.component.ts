import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sigrh-mtr-angular';
}
