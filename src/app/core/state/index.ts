import * as fromPersonnel from './personals/personal.reducer';
import {ActionReducerMap} from "@ngrx/store";


// The shape of the entire application state
export interface AppState {
  personnels: fromPersonnel.PersonnelState;
}

// Add the feature reducers into combined reducer
export const reducers: ActionReducerMap<AppState> = {
  personnels: fromPersonnel.personnelReducers
}
