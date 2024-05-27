import {Component, inject} from '@angular/core';
import {MessageService} from "primeng/api";
import {LayoutService} from "../../layout/service/app.layout.service";
import {AuthService} from "../../core/data/users/auth.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {FormValidatorsComponent} from "../form-validators/form-validators.component";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'mrt-login',
  standalone: true,
  imports: [
    ToastModule,
    ReactiveFormsModule,
    FormValidatorsComponent,
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent {
  rememberMe: boolean = false;
  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  loginForm =this.fb.group({
    email: this.fb.control('',[Validators.required, Validators.email]),
    password: this.fb.control('',[Validators.required]),
  });

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  handleLogin() {
    const email: any = this.loginForm.value.email;
    const passwd: any = this.loginForm.value.password;
    this.authService.onLogin(email, passwd);
  }
}
