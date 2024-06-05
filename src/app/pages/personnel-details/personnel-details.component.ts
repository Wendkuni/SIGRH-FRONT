import {Component, inject, Input, OnInit} from '@angular/core';
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {ActivatedRoute} from "@angular/router";
import {PersonnelResponse} from "../../core/data/personals/personnel.model";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {FonctionComponent} from "../fonction/fonction.component";
import {DossierComponent} from "../dossier/dossier.component";
import {AffectationComponent} from "../affectation/affectation.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'mrt-personnel-details',
  standalone: true,
    imports: [
        CardModule,
        ButtonModule,
        RippleModule,
        TabViewModule,
        FonctionComponent,
        DossierComponent,
        AffectationComponent,
        ToastModule
    ],
  templateUrl: './personnel-details.component.html',
  providers: [MessageService]
})
export class PersonnelDetailsComponent implements OnInit{

  personalService = inject(PersonnelService)
  router = inject(ActivatedRoute);
  personnel!: PersonnelResponse;
  messageService = inject(MessageService);

  ngOnInit(): void {
    let id  = this.router.snapshot.paramMap.get('id');

    if(id != null){
      this.getPersonnel(id);
    }
  }

  getPersonnel(id:string){
    this.personalService.getPersonnelById(id).subscribe((response) => {
      this.personnel = response;
      },error => {
        this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Une erreur est survenue lors de la récupération des données'})
      }
      )
  }

}
