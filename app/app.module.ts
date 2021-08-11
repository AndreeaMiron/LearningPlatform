import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './pages/register/register.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RequestInterceptorService} from './services/request-interceptor.service';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { IntroSurveyComponent } from './pages/intro-survey/intro-survey.component';
import { HeadComponent } from './pages/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentPageComponent,
    IntroductionComponent,
    IntroSurveyComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    /*
    MatListModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule,
    RatingModule,*/
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
