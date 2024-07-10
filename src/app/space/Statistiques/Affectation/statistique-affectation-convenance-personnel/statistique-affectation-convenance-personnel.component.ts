import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'mrt-statistique-affectation-convenance-personnel',
  standalone: true,
  imports: [
    ButtonModule,
    ConfirmDialogModule,
    DatePipe,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    RippleModule,
    SharedModule,
    TableModule,
    ToastModule,
    TooltipModule,
    CardModule,
    FormsModule,
    RouterLink,
    CalendarModule,
    TabViewModule,
  ],
  templateUrl: './statistique-affectation-convenance-personnel.component.html',
})
export class StatistiqueAffectationConvenancePersonnelComponent {
  date: any;
}
