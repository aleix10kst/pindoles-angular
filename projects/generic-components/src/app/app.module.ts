import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationErrorsModule} from '../../../generic-library/src/validation-errors';
import { BlockContainerComponent } from './block-container/block-container.component';
import {GenericListModule} from '../../../generic-library/src/generic-list';

@NgModule({
  declarations: [
    AppComponent,
    BlockContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ValidationErrorsModule,
    GenericListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
