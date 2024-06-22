import {Component, inject} from '@angular/core';
import { MessageService} from "primeng/api";
import {LayoutService} from "../../layout/service/app.layout.service";
import {AuthService} from "../../core/data/users/auth.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {FormValidatorsComponent} from "../form-validators/form-validators.component";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {Utilisateur} from "../../core/data/users/user.model";
import {Router} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {DialogModule} from "primeng/dialog";
import {RippleModule} from "primeng/ripple";

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
    RippleModule
  ],
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent {
  rememberMe: boolean = false;
  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  // Inject Router
  router = inject(Router);
  //Inject message service from primeng
  messageService = inject(MessageService);
  forgotPassFormVisible: boolean = false;

  loginForm =this.fb.group({
    email: this.fb.control('',[Validators.required, Validators.email]),
    password: this.fb.control('',[Validators.required]),
  });

  forgotPasswordForm = this.fb.group({
    email: this.fb.control('',[Validators.required, Validators.email])
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
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl("/home");
      }
      else {
        this.messageService.add({severity:'error', summary:'Error', detail:'Email ou Mot de passe incorrect'});
      }
    });
  }



  showForgotPassForm() {
    this.forgotPassFormVisible = true;
  }

  close() {
    this.forgotPassFormVisible = false;
    this.forgotPasswordForm.reset();
  }
}
