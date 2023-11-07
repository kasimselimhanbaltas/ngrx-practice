// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // HttpClient ekleyin
import { loadUsers, loadUsersSuccess} from './data.actions';
import { DataApiService } from '../services/data-api.service';
import { user } from './data.state';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private http: HttpClient, private service: DataApiService) { }

  // loadItems$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadItems),
  //     switchMap(() =>
  //       this.service.getData().pipe(
  //         map((items) => itemsLoaded({ items })),
  //         catchError((error) => of(/* Handle error here */))
  //       )
  //     )
  //   )
  // );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.service.getData().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(/* Hata işleme */))
        )
      )
    )
  );
  
}