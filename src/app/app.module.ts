import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { SubredditSideBarComponent } from './shared/subreddit-side-bar/subreddit-side-bar.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ViewSubredditComponent } from './subreddit/view-subreddit/view-subreddit.component';
import { ProductSideBarComponent } from './shared/product-side-bar/product-side-bar.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { PolicySideBarComponent } from './shared/policy-side-bar/policy-side-bar.component';
import { ViewPolicyComponent } from './policy/view-policy/view-policy.component';
import { SearchPolicyComponent } from './policy/search-policy/search-policy.component';
import { ViewSearchPoliciesComponent } from './policy/view-search-policies/view-search-policies.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreatePolicyComponent } from './policy/create-policy/create-policy.component';
import { ListPolicyComponent } from './policy/list-policy/list-policy.component';
import { PolicyDataDetailsComponent } from './policy/policy-data-details/policy-data-details.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CreateBlogPostComponent } from './blog-post/create-blog-post/create-blog-post.component';
import { ViewBlogPostComponent } from './blog-post/view-blog-post/view-blog-post.component';
import {HttpClientInterceptor} from './http-client-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    VoteButtonComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    ListSubredditsComponent,
    ViewPostComponent,
    UserProfileComponent,
    ViewSubredditComponent,
    ProductSideBarComponent,
    ViewProductComponent,
    PolicySideBarComponent,
    ViewPolicyComponent,
    SearchPolicyComponent,
    ViewSearchPoliciesComponent,
    CreateProductComponent,
    ListProductComponent,
    CreatePolicyComponent,
    ListPolicyComponent,
    PolicyDataDetailsComponent,
    BlogPostComponent,
    CreateBlogPostComponent,
    ViewBlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
