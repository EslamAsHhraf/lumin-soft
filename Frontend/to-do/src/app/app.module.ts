import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './conponent/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './conponent/editTask/editTask.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent,EditTaskComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
