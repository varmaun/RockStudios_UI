import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import { CoursesComponent } from './course-program/courses/courses.component';
import { CourseProgramComponent } from './course-program/course-program.component';
import { ProgramComponent } from './course-program/program/program.component';
import { GradeLevelsComponent } from './grade-levels/grade-levels.component';
import { GradesComponent } from './grade-levels/grades/grades.component';
import { LevelsComponent } from './grade-levels/levels/levels.component';
import { BatchesComponent } from './batches/batches.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrganizationComponent,
    CoursesComponent,
    CourseProgramComponent,
    ProgramComponent,
    GradeLevelsComponent,
    GradesComponent,
    LevelsComponent,
    BatchesComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }