import { Component, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { PermutationReceptionComponent } from '../permutation-reception/permutation-reception.component';

@Component({
  selector: 'mrt-permutation-niveau-national',
  standalone: true,
  imports: [
    TabViewModule,
    CardModule,
    PermutationNiveauNationalComponent,
    PermutationReceptionComponent,
  ],
  templateUrl: './permutation-niveau-national.component.html',
  styles: ``,
  providers: [MessageService, ConfirmationService],
})
export class PermutationNiveauNationalComponent {}
