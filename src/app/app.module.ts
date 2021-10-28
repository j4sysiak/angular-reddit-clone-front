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
import { CreateBlogPostComponent } from './blog-post/create-blog-post/create-blog-post.component';
import { ViewBlogPostComponent } from './blog-post/view-blog-post/view-blog-post.component';
import { HttpClientInterceptor } from './http-client-interceptor';
import { BlogPostTileComponent } from './shared/blog-post-tile/blog-post-tile.component';
import { ServerComponent } from './UdemyAngularTheCompleteGuide/server/server.component';
import { ServersComponent } from './UdemyAngularTheCompleteGuide/servers/servers.component';
import { WarningAlertComponent } from './UdemyAngularTheCompleteGuide/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './UdemyAngularTheCompleteGuide/success-alert/success-alert.component';
import { AssignmentSolutionComponent } from './UdemyAngularTheCompleteGuide/assignment-solution/assignment-solution.component';
import { AssignmentSolution2Component } from './UdemyAngularTheCompleteGuide/assignment-solution2/assignment-solution2.component';
import { Ng4HeaderComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-header/ng4-header.component';
import { Ng4RecipesComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.component';
import { Ng4RecipeListComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-list.component';
import { Ng4RecipeDetailComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-detail/ng4-recipe-detail.component';
import { Ng4RecipeItemComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-item/ng4-recipe-item.component';
import { Ng4ShoppingListComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.component';
import { Ng4ShoppingEditComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-edit/ng4-shopping-edit.component';
import { CmpDatabindingComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/cmp-databinding/cmp-databinding.component';
import { CockpitComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/server-element/server-element.component';
import { GameControlComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/game-control/game-control.component';
import { OddComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/odd/odd.component';
import { EvenComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/even/even.component';
import { AssignmentDirectivesComponent } from './UdemyAngularTheCompleteGuide/assignment-directives/assignment-directives.component';
import { BasicHighlightDirective } from './UdemyAngularTheCompleteGuide/assignment-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './UdemyAngularTheCompleteGuide/assignment-directives/better-highlight/better-highlight.directive';

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
    CreateBlogPostComponent,
    ViewBlogPostComponent,
    BlogPostTileComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentSolutionComponent,
    AssignmentSolution2Component,
    Ng4HeaderComponent,
    Ng4RecipesComponent,
    Ng4RecipeListComponent,
    Ng4RecipeDetailComponent,
    Ng4RecipeItemComponent,
    Ng4ShoppingListComponent,
    Ng4ShoppingEditComponent,
    CmpDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AssignmentDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
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
