import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { NgFlashMessagesModule } from "Ng-Flash-Messages";

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostComponent } from './components/post/post.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthService } from "./services/auth.service";
import { ValidateService } from "./services/validate.service";
import { EditPostComponent } from './components/edit-post/edit-post.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'create', component: AddPostComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    AddPostComponent,
    AboutComponent,
    FooterComponent,
    PostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthService,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
