import {Component, inject, Input, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
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
    AffectationComponent
  ],
  templateUrl: './personnel-details.component.html',
  styleUrl: './personnel-details.component.scss'
})
export class PersonnelDetailsComponent implements OnInit{

  personalService = inject(PersonnelService)
  router = inject(ActivatedRoute);
  personnel!: PersonnelResponse;

  ngOnInit(): void {
    let id  = this.router.snapshot.paramMap.get('id');

    if(id != null){
      this.getPersonnel(id);
    }
  }

  getPersonnel(id:string){
    this.personalService.getPersonnelById(id).subscribe((response)=>{
      this.personnel = response;
    })
  }

}
