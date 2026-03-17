import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MathTuitionComponent } from './pages/math-tuition/math-tuition.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'math-tuition', component: MathTuitionComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];