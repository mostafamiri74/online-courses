import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/home.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './modules/course/course.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, HomeComponent, CourseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
