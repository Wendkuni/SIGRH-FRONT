import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { LayoutService } from './service/app.layout.service';
import { TooltipModule } from 'primeng/tooltip';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Utilisateur } from '../core/data/users/user.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Personnel } from '../core/data/personals/personnel.model';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'mrt-menu-profile',
  templateUrl: './app.menuprofile.component.html',
  imports: [
    TooltipModule,
    NgClass,
    RouterLink,
    NgIf,
    ConfirmPopupModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  animations: [
    trigger('menu', [
      transition('void => inline', [
        style({ height: 0 }),
        animate(
          '400ms cubic-bezier(0.86, 0, 0.07, 1)',
          style({ opacity: 1, height: '*' })
        ),
      ]),
      transition('inline => void', [
        animate(
          '400ms cubic-bezier(0.86, 0, 0.07, 1)',
          style({ opacity: 0, height: '0' })
        ),
      ]),
      transition('void => overlay', [
        style({ opacity: 0, transform: 'scaleY(0.8)' }),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)'),
      ]),
      transition('overlay => void', [
        animate('.1s linear', style({ opacity: 0 })),
      ]),
    ]),
  ],
  standalone: true,
  providers: [ConfirmationService, MessageService],
})
export class AppMenuProfileComponent {
  public layoutService = inject(LayoutService);
  public el = inject(ElementRef);
  public confirmationService = inject(ConfirmationService);
  public messageService = inject(MessageService);
  router = inject(Router);
  currentUser: Personnel = JSON.parse(localStorage.getItem('user') as string);

  toggleMenu() {
    this.layoutService.onMenuProfileToggle();
  }

  get isHorizontal() {
    return this.layoutService.isHorizontal() && this.layoutService.isDesktop();
  }

  get menuProfileActive(): boolean {
    return this.layoutService.state.menuProfileActive;
  }

  get menuProfilePosition(): string {
    return this.layoutService.config().menuProfilePosition;
  }

  get isTooltipDisabled(): boolean {
    return !this.layoutService.isSlim();
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment valider cette opération ?',
      accept: () => {
        this.logOut();
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Opération effectuée avec succès',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejeté',
          detail: 'Opération rejetée',
          life: 3000,
        });
      },
    });
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
