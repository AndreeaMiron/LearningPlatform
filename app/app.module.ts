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
import { ParagraphsComponent } from './pages/paragraphs/paragraphs.component';
import { AttributeComponent } from './pages/attribute/attribute.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { GoogleComponent } from './pages/google/google.component';
import { AgmCoreModule } from '@agm/core';
import { CountdownComponent } from './pages/countdown/countdown.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import {DatePipe} from '@angular/common';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MappingComponent } from './pages/mapping/mapping.component';
import { SlideshowComponent } from './pages/slideshow/slideshow.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentPageComponent,
    IntroductionComponent,
    IntroSurveyComponent,
    HeadComponent,
    ParagraphsComponent,
    AttributeComponent,
    QuotesComponent,
    ColorsComponent,
    GoogleComponent,
    CountdownComponent,
    AdminPageComponent,
    BlocksComponent,
    ClassesComponent,
    TablesComponent,
    ListsComponent,
    MenuComponent,
    MappingComponent,
    SlideshowComponent,
    ResetPassComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCl-T9oL_Mm_HQnM6dhh8mJhn8EdpwL6j8'
        }),
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
        MatListModule,

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
  },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
