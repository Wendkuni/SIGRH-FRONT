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
  //Inject personnel service
  personnelService = inject(PersonnelService);

  users: any = [
    {
      idAgent: 78,
      matricule: '2310NO',
      nomPrenom: 'Ousmane',
      nomPrenomArab: 'ouam',
      nni: '000258465',
      dteRecrutement: '2024-06-25',
      dteTitularisation: '2024-06-25',
      dteSortie: '2024-06-25',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401143',
      adressEmp: 'Alajo',
      debutCntrat: '2024-06-25',
      finCntrat: '2024-06-25',
      dateNaiss: '2024-06-25',
      lieuNaiss: 'SAWQED',
      actifOrNot: true,
      bank: 'FIDELITY',
      codeBank: 'FI02',
      numroCpte: '025F36',
      cleRib: '001F',
      detacher: 'ME',
      ministerOrigine: 'MS',
      imagPers:
        'iVBORw0KGgoAAAANSUhEUgAAB0wAAANECAYAAAAzF9xYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAP+lSURBVHhe7P0H2CXHdR4I13xhcs4zyHEAEIEgQYABYBZBkZQokrIkB8mS7fUvyyLt9eOwK8sy19bKK2sf23KQaTloJduKNEVSEiWKYgJIMBOJyBkDTMTknP/znlB1qrq6b9/73Qmg5r3f6a46dVKdqq7uvn3v/WZteP/HT4UKPvJ/3qYlwqxZWhgdP/X/fD2coheD7Zlbb9uHonzsSH5WNUrBqVkntdQDsKXFECZ0X4PYPEUy7a6ppS2wU2L7FDmbNTB/YgeRiTVsfZwA8fA3YTIAJ0eKGSjT0Z7sq2JDAH0QvzCUIqgiy/EokJlyCv1FSfM3OI8OJHoK8mQEWm0RnYITtLEQe5V6Ju/5ClXpC2hDgfe9YNZVA30ZxuE5hb6xQ6g',
      roles: ['ROLE_USER'],
    },
    {
      idAgent: 79,
      matricule: '2311NO',
      nomPrenom: 'Aminata',
      nomPrenomArab: 'amn',
      nni: '000258466',
      dteRecrutement: '2024-06-26',
      dteTitularisation: '2024-06-26',
      dteSortie: '2024-06-26',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401144',
      adressEmp: 'Kokrobite',
      debutCntrat: '2024-06-26',
      finCntrat: '2024-06-26',
      dateNaiss: '2024-06-26',
      lieuNaiss: 'THERJW',
      actifOrNot: true,
      bank: 'ACCESS',
      codeBank: 'AC02',
      numroCpte: '025F37',
      cleRib: '002F',
      detacher: 'WE',
      ministerOrigine: 'MP',
      roles: ['ROLE_DREN'],
    },
    {
      idAgent: 80,
      matricule: '2312NO',
      nomPrenom: 'Moussa',
      nomPrenomArab: 'mouss',
      nni: '000258467',
      dteRecrutement: '2024-06-27',
      dteTitularisation: '2024-06-27',
      dteSortie: '2024-06-27',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401145',
      adressEmp: 'Labadi',
      debutCntrat: '2024-06-27',
      finCntrat: '2024-06-27',
      dateNaiss: '2024-06-27',
      lieuNaiss: 'DFJKEW',
      actifOrNot: true,
      bank: 'CALYON',
      codeBank: 'CA02',
      numroCpte: '025F38',
      cleRib: '003F',
      detacher: 'ER',
      ministerOrigine: 'MQ',
      roles: ['ROLE_GRH'],
    },
    {
      idAgent: 81,
      matricule: '2313NO',
      nomPrenom: 'Aïcha',
      nomPrenomArab: 'aysh',
      nni: '000258468',
      dteRecrutement: '2024-06-28',
      dteTitularisation: '2024-06-28',
      dteSortie: '2024-06-28',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401146',
      adressEmp: 'Nungua',
      debutCntrat: '2024-06-28',
      finCntrat: '2024-06-28',
      dateNaiss: '2024-06-28',
      lieuNaiss: 'TQWEGG',
      actifOrNot: true,
      bank: 'HSBC',
      codeBank: 'HS02',
      numroCpte: '025F39',
      cleRib: '004F',
      detacher: 'RT',
      ministerOrigine: 'MA',
      roles: ['ROLE_DRH'],
    },
    {
      idAgent: 82,
      matricule: '2314NO',
      nomPrenom: 'Ibrahim',
      nomPrenomArab: 'ibrhm',
      nni: '000258469',
      dteRecrutement: '2024-06-29',
      dteTitularisation: '2024-06-29',
      dteSortie: '2024-06-29',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401147',
      adressEmp: 'Adenta',
      debutCntrat: '2024-06-29',
      finCntrat: '2024-06-29',
      dateNaiss: '2024-06-29',
      lieuNaiss: 'OPQVBN',
      actifOrNot: true,
      bank: 'BARCLAYS',
      codeBank: 'BA02',
      numroCpte: '025F40',
      cleRib: '005F',
      detacher: 'TY',
      ministerOrigine: 'MB',
      roles: ['ROLE_COMMISSION'],
    },
    {
      idAgent: 83,
      matricule: '2315NO',
      nomPrenom: 'Fatoumata',
      nomPrenomArab: 'ftmt',
      nni: '000258470',
      dteRecrutement: '2024-06-30',
      dteTitularisation: '2024-06-30',
      dteSortie: '2024-06-30',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401148',
      adressEmp: 'Madina',
      debutCntrat: '2024-06-30',
      finCntrat: '2024-06-30',
      dateNaiss: '2024-06-30',
      lieuNaiss: 'WQERGB',
      actifOrNot: true,
      bank: 'UBA',
      codeBank: 'UB02',
      numroCpte: '025F41',
      cleRib: '006F',
      detacher: 'UI',
      ministerOrigine: 'MC',
      roles: ['ROLE_ADMIN'],
    },
    {
      idAgent: 84,
      matricule: '2316NO',
      nomPrenom: 'Abdoulaye',
      nomPrenomArab: 'abdly',
      nni: '000258471',
      dteRecrutement: '2024-07-01',
      dteTitularisation: '2024-07-01',
      dteSortie: '2024-07-01',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401149',
      adressEmp: 'Dansoman',
      debutCntrat: '2024-07-01',
      finCntrat: '2024-07-01',
      dateNaiss: '2024-07-01',
      lieuNaiss: 'ZXCVBN',
      actifOrNot: true,
      bank: 'ECOBANK',
      codeBank: 'EC02',
      numroCpte: '025F42',
      cleRib: '007F',
      detacher: 'IO',
      ministerOrigine: 'MD',
      roles: ['ROLE_USER'],
    },
  ];

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
    for (let user of this.users) {
      if (user.matricule == matricule && passwd == 'admin123') {
        localStorage.setItem('user', JSON.stringify(user));
        if (user.roles.includes('ROLE_USER')) {
          this.router.navigateByUrl('/home-agent-space');
        } else {
          this.router.navigateByUrl('/home');
        }
        return;
      }
    }
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
