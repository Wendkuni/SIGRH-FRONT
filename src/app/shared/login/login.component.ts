import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LayoutService } from '../../layout/service/app.layout.service';
import { AuthService } from '../../core/data/users/auth.service';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { FormValidatorsComponent } from '../form-validators/form-validators.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Utilisateur } from '../../core/data/users/user.model';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { PersonnelService } from '../../core/data/personals/personnel.service';
import {
  Personnel,
  Personnels,
} from '../../core/data/personals/personnel.model';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'mrt-login',
  standalone: true,
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormValidatorsComponent,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    RippleModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  providers: [MessageService],
})
export class LoginComponent {
  layoutService = inject(LayoutService);
  fb = inject(FormBuilder);
  // Inject Router
  router = inject(Router);
  //Inject message service de primeng
  messageService = inject(MessageService);
  // Inject AuthService
  authService = inject(AuthService);

  loginForm = this.fb.group({
    matricule: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  handleLogin() {
    const matricule: any = this.loginForm.value.matricule;
    const passwd: any = this.loginForm.value.password;

    this.authService.login(matricule, passwd);
    let user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      if (user.roles.includes('ROLE_USER')) {
        this.router.navigateByUrl('/home-agent-space');
      } else {
        this.router.navigateByUrl('/home');
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Matricule ou Mot de passe incorrect',
      });
      // this.personnelService
      //   .findPersonnelByMatricule(matricule)
      //   .subscribe((user: Personnel) => {
      //     if (user != null && passwd == 'admin123') {
      //       user.espace = 'ESPACE AGENT';
      //       localStorage.setItem('user', JSON.stringify(user));
      //       this.router.navigateByUrl('/home');
      //     } else {
      //       this.messageService.add({
      //         severity: 'error',
      //         summary: 'Error',
      //         detail: 'Matricule ou Mot de passe incorrect',
      //       });
      //     }
      //   });
    }
  }
}
