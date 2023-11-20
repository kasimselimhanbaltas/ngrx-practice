import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonInterceptor } from './json.interceptor';
import { reducer } from './store/data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataComponent } from './data/data.component';
import { DataApiService } from './services/data-api.service';
import { DataEffects } from './store/data.effects';
import { DataCsComponent } from './data-cs/data-cs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DataCsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({data: reducer }),
    EffectsModule.forRoot([DataEffects]),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonInterceptor,
      multi: true
    },
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
