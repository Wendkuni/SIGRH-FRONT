import {Courier, Couriers} from "../data/couriel/couriel.model";
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";

export type CourierState = {
  couriers: Couriers;
  isLoading: boolean;
  filter: {query: string, order: 'asc' | 'desc'};
}

export const initialCourierState: CourierState = {
  couriers: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
}

export const courierStore = signalStore(
  { providedIn: 'root'},
  withState(initialCourierState),
  withMethods( store => ({
    addCourier: (courier: Courier) => {
      patchState(store, {isLoading: true});
      patchState(store, {couriers: [ ...store.couriers(), courier]});
      patchState(store, {isLoading: false});
    }
  }))

)
