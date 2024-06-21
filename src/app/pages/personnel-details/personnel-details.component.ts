import {Component, inject, Input, OnInit} from '@angular/core';
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {ActivatedRoute} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {FonctionComponent} from "../fonction/fonction.component";
import {DossierComponent} from "../dossier/dossier.component";
import {AffectationComponent} from "../affectation/affectation.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {Personnel} from "../../core/data/personals/personnel.model";

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
  private route = inject(ActivatedRoute);
  personnel: Personnel = {} as Personnel;
  messageService = inject(MessageService);
  id = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    if(this.id != null){
      this.getPersonnel(this.id);
    }
  }

  getPersonnel(id:number){
    this.personalService.findPersonnelById(id).subscribe((response) => {
      this.personnel = response;
      console.log(this.personnel);
      },error => {
        this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Une erreur est survenue lors de la récupération des données'})
      }
      )
  }

}
