import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { TimeChartComponent } from './dashboard/time-chart/time-chart.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TodaysTaskComponent } from "./dashboard/todays-task/todays-task.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    CalendarComponent,
    TimeChartComponent,
    TaskListComponent,
    TodaysTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
