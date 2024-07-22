import {Component, inject} from '@angular/core';
import {Personnel} from "../../../../../core/data/personals/personnel.model";
import {PieceJustificatif} from "../../../../../core/data/mobilite/mobilite.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Cols} from "../../../../../core/data/primeng/primeng.model";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'mrt-agent-anulation-acte',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    FormsModule,
    FileUploadModule,
    RippleModule,
    TableModule,
    TooltipModule
  ],
  templateUrl: './agent-anulation-acte.component.html',
  styleUrl: './agent-anulation-acte.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AgentAnulationActeComponent {

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);
  image: any;

  cancel() {

  }


  save() {

  }

  removePiece(index: any) {
    this.listPieceJustificatif.splice(index, 1);
  }

  pieceLibelle: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  messageService = inject(MessageService);

  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    },
    {
      field: 'image',header: 'image'
    }
  ];


  ajouter() {
    if (this.image != null && this.pieceLibelle != ''){
      this.listPieceJustificatif.push({

        libelle: this.pieceLibelle,
        images: this.image
      });
      console.log()
      this.pieceLibelle = '';
      this.image = null;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Le libellé et l'image sont obligatoires",
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
    "Acte objet d’annulation",
    "Justificatif de l’annulation",


  ];


}
