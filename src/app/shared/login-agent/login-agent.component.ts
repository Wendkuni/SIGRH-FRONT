import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { FormValidatorsComponent } from '../form-validators/form-validators.component';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../core/data/users/auth.service';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Utilisateur } from '../../core/data/users/user.model';

@Component({
  selector: 'mrt-login-agent',
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
    RippleModule
  ],
  templateUrl: './login-agent.component.html',
  styleUrl: './login-agent.component.scss',
  providers: [MessageService]
})
export class LoginAgentComponent {

  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  // Inject Router
  router = inject(Router);
  //Inject message service from primeng
  messageService = inject(MessageService);

  loginForm =this.fb.group({
    email: this.fb.control('',[Validators.required, Validators.email]),
    password: this.fb.control('',[Validators.required]),
  });

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  handleLogin() {
    const email:any = this.loginForm.value.email;
    const passwd:any = this.loginForm.value.password;
    this.authService.getAllUsers().subscribe((users: Utilisateur[]) => {
      const user = users.find((user) => user.email === email && user.password === passwd);
      if(user != null){
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl("/home");
      }
      else {
        this.messageService.add({severity:'error', summary:'Error', detail:'Email ou Mot de passe incorrect'});
      }
    });
  }

}
