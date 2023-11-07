import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { EMPTY, Observable, catchError, switchMap, tap } from "rxjs";
import { DataApiService } from "../services/data-api.service";
import { Actions } from "@ngrx/effects";
import { user } from "../store/data.state";

export interface UsersState {
  users: user[];
}

@Injectable()
export class UsersStore extends ComponentStore<UsersState> {
  logError(e: any): void {
    throw new Error("Method not implemented.");
  }
  
  constructor(private actions$: Actions, private service: DataApiService) {
    super({users: []});
  }

  // Each new call of getMovie(id) pushed that id into movieId$ stream.
  readonly getUsers = this.effect(() => {
    return this.actions$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap((id) => this.service.getData().pipe(
        //👇 Act on the result within inner pipe.
        tap({
          next: (users) => this.setUsers(users),
          error: (e) => this.logError(e),
        }),
        // 👇 Handle potential error within inner pipe.
        catchError(() => EMPTY),
      )),
    );
  });
 
  // Setter
  readonly setUsers = this.updater((state, payload: user[]) => ({ ...state, users: payload }));

  //Selector
  readonly users$: Observable<user[] > = this.select(state => state.users);
  
}

