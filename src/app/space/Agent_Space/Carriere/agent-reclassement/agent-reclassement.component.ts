import {Component, inject} from '@angular/core';
import {Personnel} from "../../../../core/data/personals/personnel.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-reclassement',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    FormsModule,
    TableModule,
    RippleModule,
    MultiSelectModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    CardModule
  ],
  templateUrl: './agent-reclassement.component.html',
  styleUrl: './agent-reclassement.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AgentReclassementComponent {

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);
  image: any;
  visible: boolean = false;


  removePiece(index: any) {
    this.listPieceJustificatif.splice(index, 1);
  }

  pieceLibelle: any;

  listPieceJustificatif = Array<any>();

  messageService = inject(MessageService);

  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    },

  ];


  ajouter() {
    if (this.pieceLibelle.length > 0 ){
      this.listPieceJustificatif = this.pieceLibelle;
      this.image = null;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Choisir des pieces justificatives",
      });
    }

  }

  removeFile() {
    this.image = null;
  }



  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
  }

  listeLibellePiece = [

    "Instituteur",
    "Inspecteur",

  ];

  newUpload() {
    this.OnHide()
  }
  OnHide(){
    this.visible = false;
  }

  ShowDialog() {
    this.visible = true;
  }

  cancel() {

  }


  save() {

  }


}
