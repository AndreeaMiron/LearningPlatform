import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {StudentPageComponent} from './pages/student-page/student-page.component';
import {IntroductionComponent} from './pages/introduction/introduction.component';
import {HeadComponent} from './pages/head/head.component';
import {ParagraphsComponent} from './pages/paragraphs/paragraphs.component';
import {AttributeComponent} from './pages/attribute/attribute.component';
import {QuotesComponent} from './pages/quotes/quotes.component';
import {ColorsComponent} from './pages/colors/colors.component';
import {GoogleComponent} from './pages/google/google.component';
import {CountdownComponent} from './pages/countdown/countdown.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {TablesComponent} from './pages/tables/tables.component';
import {ListsComponent} from './pages/lists/lists.component';
import {BlocksComponent} from './pages/blocks/blocks.component';
import {ClassesComponent} from './pages/classes/classes.component';
import {MenuComponent} from './pages/menu/menu.component';
import {MappingComponent} from './pages/mapping/mapping.component';
import {ResetPassComponent} from './pages/reset-pass/reset-pass.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {ClassVsIdComponent} from './pages/class-vs-id/class-vs-id.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'student-page', component: StudentPageComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'head', component: HeadComponent},
  {path: 'paragraphs', component: ParagraphsComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'quotes', component: QuotesComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'google', component: GoogleComponent},
  {path: 'countdown', component: CountdownComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'blocks', component: BlocksComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'mapping', component: MappingComponent},
  {path: 'reset-pass', component: ResetPassComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'classvsid', component: ClassVsIdComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
