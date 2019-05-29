import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
