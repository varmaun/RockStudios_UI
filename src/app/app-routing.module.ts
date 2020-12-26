import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import { CoursesComponent } from './course-program/courses/courses.component';
import { CourseProgramComponent } from './course-program/course-program.component';
import { ProgramComponent } from './course-program/program/program.component'
import { GradesComponent } from './grade-levels/grades/grades.component';
import { LevelsComponent } from './grade-levels/levels/levels.component';
import { BatchesComponent } from './batches/batches.component';
import { PaymentsComponent } from './payments/payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'users', component:UsersComponent},
  {path: 'organization', component:OrganizationComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'courseProgram', component:CourseProgramComponent},
  {path: 'program', component:ProgramComponent},
  {path: 'grades', component:GradesComponent},
  {path: 'levels', component:LevelsComponent},
  {path: 'batches', component:BatchesComponent},
  {path: 'payments', component:PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
