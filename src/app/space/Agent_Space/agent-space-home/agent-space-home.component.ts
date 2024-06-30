import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Personnel } from '../../../core/data/personals/personnel.model';

@Component({
  selector: 'mrt-agent-space-home',
  standalone: true,
  imports: [CardModule],
  templateUrl: './agent-space-home.component.html',
  styleUrl: './agent-space-home.component.scss'
})
export class AgentSpaceHomeComponent {
  currentUser: Personnel = JSON.parse(localStorage.getItem('user') as string);

}
