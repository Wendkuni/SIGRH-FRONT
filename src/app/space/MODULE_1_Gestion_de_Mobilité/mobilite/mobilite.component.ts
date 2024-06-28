import {Component, inject} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {ConvenancePersonnelleComponent} from "./convenance-personnelle/convenance-personnelle.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'mrt-mobilite',
  standalone: true,
  imports: [
    TabViewModule,
    ConvenancePersonnelleComponent
  ],
  templateUrl: './mobilite.component.html',
  styleUrl: './mobilite.component.scss'
})
export class MobiliteComponent {



}
