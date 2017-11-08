import { MyFilterPipe } from './myFiler.pipe';
import { SummaryPipe } from './summary.pipe';
import { AuthrosService } from './authros.service';
import { CoursesService } from './courses.servies';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { FormatTextComponent } from './format-text/format-text.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgIftestComponent } from './ng-iftest/ng-iftest.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MyCoursesFromComponent } from './my-courses-from/my-courses-from.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    StartButtonComponent,
    FormatTextComponent,
    MyFilterPipe,
    PanelComponent,
    LikeComponent,
    NgIftestComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    MyCoursesFromComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
