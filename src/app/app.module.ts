import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RctFormComponent } from './components/rct-form/rct-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddInputComponent } from './components/add-input/add-input.component';
import { MaterialModule } from './material/material.module';
import { CVBuilderComponent } from './components/cvBuilder/cvbuilder.component';
import { CVViewDialogComponent } from './components/cvViewDialog/cv-view-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    RctFormComponent,
    AddInputComponent,
    CVBuilderComponent,
    CVViewDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CVViewDialogComponent]
})
export class AppModule { }
