import {Component, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ToggleButtonModule} from "primeng/togglebutton";
import {MultiSelectModule} from "primeng/multiselect";
import {FileUploadModule} from "primeng/fileupload";
import {AffectationService} from "../../../../core/data/affectation/affectation.service";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'mrt-convenance-personnelle',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    FormsModule,
    MultiSelectModule,
    FileUploadModule
  ],
  templateUrl: './convenance-personnelle.component.html',
  styleUrl: './convenance-personnelle.component.scss'
})
export class ConvenancePersonnelleComponent implements OnInit{

  //  Variable pour afficher le formulaire d'ajout ou de modification
  showMobiliteDialog: boolean = false;

  uploadedFiles: any[] = [];

  imageCertificatPriseService!: any;
  imageDemande!: any;
  imageDocumentIntegrationRecrutement!:any;
  imageSituationMatrimonial!: any;
  imageSituationSanitaire!: any;

  // injection du formBuilder
  fb = inject(FormBuilder);

  // Service mobilite
  mobiliteService = inject(AffectationService);

  // list localite
  listLocalite$!: any;

  situationMatrimonial: boolean = false;

  // Sexe
  sexeOptions = [
    'Masculin',
    'Féminin'
  ]

  // Attribut de affection
  affectionForm = this.fb.group({
    localite: this.fb.control(''),
    serviceEcole: this.fb.control(''),
    dateEffet: this.fb.control(''),
    nature: this.fb.control(''),
    dren: this.fb.control(''),
    notePedagogiq: this.fb.control(''),
    moughataa: this.fb.control('')
  });

  ngOnInit(): void {
    this.getLocalite();
  }

  //Methode pour afficher le formulaire d'ajout
  showMobiliteForm() {
    this.showMobiliteDialog = true;
  }

  // Methode pour recuperer les localites
  private getLocalite(){
    this.mobiliteService.getLocalite().subscribe((response) => {
      this.listLocalite$ = response;
    });
  }

  //  Methode pour ajouter une image Demande
  onUploadDemande(event: any) {
    this.imageDemande = event.files[0];
  }

  removeImageDemande() {
    this.imageDemande = null;
  }

  //  Methode pour ajouter une image CertificatPriseService
  onUploadCertificatPriseService(event: any) {
    this.imageCertificatPriseService = event.files[0];
  }

  removeImageCertificatPriseService() {
    this.imageCertificatPriseService = null;
  }

  //  Methode pour ajouter une image DocumentIntegrationRecrutement
  onUploadDocumentIntegrationRecrutement(event: any) {
    this.imageDocumentIntegrationRecrutement = event.files[0];
  }

  removeImageDocumentIntegrationRecrutement() {
    this.imageDocumentIntegrationRecrutement = null;
  }

  // Methode  pour ajouter une image pour Situation Matrimoniale
  onUploaderSituationMatrimonial(event: any) {
    this.imageSituationMatrimonial = event.files[0];
  }

  removeImageSituationMatrimonial() {
    this.imageSituationMatrimonial = null;
  }

  // Methode  pour ajouter une image pour Situation Sanitaire
  onUploaderSituationSanitaire(event: any) {
    this.imageSituationSanitaire = event.files[0];
  }

  removeImageSituationSanitaire() {
    this.imageSituationSanitaire = null;
  }

  // Methode pour fermer la vue du formulaire
  cancelMobilite() {
    this.removeImageCertificatPriseService();
    this.removeImageDemande();
    this.removeImageDocumentIntegrationRecrutement();
    this.affectionForm.reset();
  }

}
