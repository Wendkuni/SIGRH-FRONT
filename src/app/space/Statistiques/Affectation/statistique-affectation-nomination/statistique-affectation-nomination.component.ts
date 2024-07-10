import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'mrt-statistique-affectation-nomination',
  standalone: true,
  imports: [CardModule, ButtonModule, CalendarModule, FormsModule, TableModule],
  templateUrl: './statistique-affectation-nomination.component.html',
  styleUrl: './statistique-affectation-nomination.component.scss',
})
export class StatistiqueAffectationNominationComponent {
  date: any;
}
