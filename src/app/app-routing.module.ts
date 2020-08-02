import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteOnboardingComponent } from './institute-onboarding/institute-onboarding.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { InstituteDetailsComponent } from './institute-details/institute-details.component';

const routes: Routes = [
  {path : '', redirectTo : 'instituteonboarding/institutedetails', pathMatch : 'full'},
  {
    path : 'instituteonboarding', 
    component : InstituteOnboardingComponent,
    children : [
      {path: 'coursedetails', component : CourseDetailsComponent},
      {path : 'institutedetails', component : InstituteDetailsComponent}
    ]
  },
  {path : '**', redirectTo : 'instituteonboarding/institutedetails', pathMatch :'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
