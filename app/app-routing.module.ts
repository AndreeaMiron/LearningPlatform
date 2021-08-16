import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {StudentPageComponent} from './pages/student-page/student-page.component';
import {IntroductionComponent} from './pages/introduction/introduction.component';
import {IntroSurveyComponent} from './pages/intro-survey/intro-survey.component';
import {HeadComponent} from './pages/head/head.component';
import {ParagraphsComponent} from './pages/paragraphs/paragraphs.component';
import {AttributeComponent} from './pages/attribute/attribute.component';
import {QuotesComponent} from './pages/quotes/quotes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student-page', component: StudentPageComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'intro-survey', component: IntroSurveyComponent},
  {path: 'head', component: HeadComponent},
  {path: 'paragraphs', component: ParagraphsComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'quotes', component: QuotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
