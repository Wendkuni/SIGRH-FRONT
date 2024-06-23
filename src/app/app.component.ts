import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {AppLayoutComponent} from "./layout/app.layout.component";

@Component({
  selector: 'mrt-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, ButtonModule, AppLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sigrh-mtr-angular';
}
