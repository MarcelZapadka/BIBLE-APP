import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppChapterContent } from './app-chapter-content/app-chapter-content';
import { AppChapterNavbar } from './app-chapter-navbar/app-chapter-navbar';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EnBibleProviderService } from './en-bible-provider.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StarterPageComponent } from './starter-page/starter-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  { path: '',  component: StarterPageComponent, pathMatch: 'full' },
  { path: 'bible/:book/:chapter', component: AppChapterContent },
  { path: '**', component: ErrorPageComponent ,}

];

@NgModule({
  declarations: [
    AppComponent,
    AppChapterContent,
    AppChapterNavbar,
    ErrorPageComponent,
    StarterPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    EnBibleProviderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
