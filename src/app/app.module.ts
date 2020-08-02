import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstituteOnboardingComponent } from './institute-onboarding/institute-onboarding.component';
import { InstituteDetailsComponent } from './institute-details/institute-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NgbModule, NgbAlertModule, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { DxTextBoxModule, DxRadioGroupModule, DxDateBoxModule, DxSelectBoxModule, DxDropDownBoxModule, DxTemplateModule, DxListModule, DxDropDownButtonModule, DxTextAreaModule } from 'devextreme-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstituteOnboardingComponent,
    InstituteDetailsComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    DxTextBoxModule,
    AngularFontAwesomeModule,
    DxRadioGroupModule,
    DxDateBoxModule,
    NgbDatepickerModule,
    DxSelectBoxModule,
    DxDropDownBoxModule, 
    DxTemplateModule, 
    DxListModule,
    DxDropDownButtonModule,
    DxTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
