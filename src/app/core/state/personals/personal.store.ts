import {Personnel, Personnels} from "../../data/personals/personnel.model";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {inject} from "@angular/core";
import {PersonnelService} from "../../data/personals/personnel.service";

export type personalFiler = "all" | "pending" | "completed"

type PersonalState ={
  personnel: Personnels;
  loading: boolean;
  filter: personalFiler
 }

 const initialState: PersonalState = {
  personnel: [] as Personnels,
   loading: false,
   filter: "all"
 }

 export const PersonnelStore = signalStore(
   { providedIn: 'root' },
   withState(initialState),
   withMethods(
     (store, personnelService = inject(PersonnelService)) =>({
       getAllPersonnel() {
         patchState(store, {loading: true});
         personnelService.getAllPersonnels().subscribe(personnel => {
            patchState(store, {personnel, loading: false});
         });
       },
       createPersonnel(personnel: Personnel) {
         personnelService.createPersonnel(personnel);
         patchState(store, (state) =>({
           personnel: [...state.personnel, personnel]
         }))
       }
     })
   )
 );
