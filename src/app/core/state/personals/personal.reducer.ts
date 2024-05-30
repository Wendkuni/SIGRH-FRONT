// 01 Define the state of my shape
import {Personnel} from "../../data/personals/personnel.model";

export interface PersonnelState{
  personnels: Personnel[];
  selectedPersonnelId: bigint | null;
}

// 02 Define the initial state
export const initialState: PersonnelState = {
  personnels: [],
  selectedPersonnelId: null
}

//Build the most simple reducer
export function personnelReducers( state = initialState, action:any):PersonnelState {
  switch(action.type){
    default:
      return state;
  }


}
