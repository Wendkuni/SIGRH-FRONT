import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'mrt-statistique-affectation-permutation',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    SharedModule,
    TableModule,
    CalendarModule,
    FormsModule,
    CardModule,
  ],
  templateUrl: './statistique-affectation-permutation.component.html',
})
export class StatistiqueAffectationPermutationComponent {
  date: any;
}
