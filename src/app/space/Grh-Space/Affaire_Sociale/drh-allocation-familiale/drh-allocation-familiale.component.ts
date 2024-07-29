import {Component} from '@angular/core';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FieldsetModule} from "primeng/fieldset";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe, NgIf} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {TagModule} from "primeng/tag";
import {RadioButtonModule} from "primeng/radiobutton";
import {ToolbarModule} from "primeng/toolbar";
import {TabViewModule} from "primeng/tabview";
import {
  AllocationFamilialeNonTraiterComponent
} from "./allocation-familiale-non-traiter/allocation-familiale-non-traiter.component";
import {
  AllocationFamilialeTraiterComponent
} from "./allocation-familiale-traiter/allocation-familiale-traiter.component";

@Component({
  selector: 'mrt-drh-allocation-familiale',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ReactiveFormsModule,
    NgIf,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    RippleModule,
    TagModule,
    RadioButtonModule,
    FormsModule,
    DatePipe,
    ToolbarModule,
    TabViewModule,
    AllocationFamilialeNonTraiterComponent,
    AllocationFamilialeTraiterComponent
  ],
  templateUrl: './drh-allocation-familiale.component.html',
  styleUrl: './drh-allocation-familiale.component.scss'
})
export class DrhAllocationFamilialeComponent {


}
