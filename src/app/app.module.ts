import { AuthService } from './services/auth.service';

import { OrderService } from './services/order.service';
import { GitHubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core/';
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
import { PostService } from './services/post.service';
import { MyGithubFollowersComponent } from './my-github-followers/my-github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { AdminComponent } from './admin/admin.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';




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
    PostsComponent,
    MyGithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    AdminComponent,
    HomeAuthComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent },
      {path: 'followers', component: MyGithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent},
    ])
    
  ],
  providers: [
    AuthService,
    OrderService,
    PostService,
    CoursesService,
    AuthrosService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
    GitHubService,  //meaning where we use ErrorHandler class use AppErrorHander class instead
    
    //For creating a mock back-end.
    // fakeBackendProvider,
    MockBackend
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
