import {Component, inject} from '@angular/core';
import {Personnel, PieceJustificatif} from "../../../../core/data/personals/personnel.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-mes-dossiers',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    RippleModule,
    TableModule,
    TooltipModule,
    CardModule
  ],
  templateUrl: './mes-dossiers.component.html',
  styleUrl: './mes-dossiers.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class MesDossiersComponent {

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);
  image: any;
  pieceLibelle: any;
  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    },
    {
      field: 'image',header: 'image'
    }
  ];
  listPieceJustificatif = Array<PieceJustificatif>();
  messageService = inject(MessageService);


  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
  }

  removeFile() {
    this.image = null;
  }

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

  removePiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }


}
