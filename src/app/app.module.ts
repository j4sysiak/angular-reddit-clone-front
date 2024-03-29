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
import { CmpDatabindingComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/cmp-databinding/cmp-databinding.component';
import { CockpitComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './UdemyAngularTheCompleteGuide/cmp-databinding/server-element/server-element.component';
import { GameControlComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/game-control/game-control.component';
import { OddComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/odd/odd.component';
import { EvenComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja5-Databinding/even/even.component';
import { BasicHighlightDirective } from './UdemyAngularTheCompleteGuide/assignment-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './UdemyAngularTheCompleteGuide/assignment-directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './UdemyAngularTheCompleteGuide/assignment-directives/unless/unless.directive';
import { AccountComponent } from './UdemyAngularTheCompleteGuide/assignment-services/account/account.component';
import { NewAccountComponent } from './UdemyAngularTheCompleteGuide/assignment-services/new-account/new-account.component';
import { AccountsService } from './UdemyAngularTheCompleteGuide/assignment-services/accounts.service';
import { LoggingService} from './UdemyAngularTheCompleteGuide/assignment-services/logging.service';
import { ActiveUsersComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja9-services/active-users/active-users.component';
import { InactiveUsersComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja9-services/inactive-users/inactive-users.component';
import { CounterService } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja9-services/counter.service';
import { HomeRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/home-routing/home-routing.component';
import { ServersRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/servers-routing.component';
import { EditServerRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/edit-server-routing.component';
import { ServerRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing.component';
import { UsersRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/users-routing/users-routing.component';
import { UserRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/users-routing/user-routing/user-routing.component';
import { PageNotFoundComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/page-not-found/page-not-found.component';
import { AuthRoutingService} from './UdemyAngularTheCompleteGuide/assignment-routing/auth-routing.service';
import { AuthRoutingGuardService } from './UdemyAngularTheCompleteGuide/assignment-routing/auth-routing-guard.service';
import { CanDeactivateRoutingGuardService } from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/can-deactivate-routing-guard.service';
import { ErrorPageComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/error-page/error-page.component';
import { ServerRoutingResolverService } from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing-resolver.service';
import { ObservablesUserService } from './UdemyAngularTheCompleteGuide/assignment-observables/observables-user.service';
import { ShortenPipe } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja17-pipes/shorten.pipe';
import { FilterPipe } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja17-pipes/filter.pipe';
import { ReversePipe } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja17-pipes/reverse.pipe';
import { SortPipe } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja17-pipes/sort.pipe';
import { AssignmentSolutionComponent } from './UdemyAngularTheCompleteGuide/assignment-solution/assignment-solution.component';
import { AssignmentSolution2Component } from './UdemyAngularTheCompleteGuide/assignment-solution2/assignment-solution2.component';
import { AssignmentDirectivesComponent } from './UdemyAngularTheCompleteGuide/assignment-directives/assignment-directives.component';
import { AssignmentRoutingComponent } from './UdemyAngularTheCompleteGuide/assignment-routing/assignment-routing.component';
import { AssignmentServicesComponent } from './UdemyAngularTheCompleteGuide/assignment-services/assignment-services.component';
import { AssignmentObservablesComponent } from './UdemyAngularTheCompleteGuide/assignment-observables/assignment-observables.component';
import { AssignmentObservablesUserComponent } from './UdemyAngularTheCompleteGuide/assignment-observables/assignment-observables-user/assignment-observables-user.component';
import { AssignmentObservablesHomeComponent } from './UdemyAngularTheCompleteGuide/assignment-observables/assignment-observables-home/assignment-observables-home.component';
import { AssignmentFormsComponent } from './UdemyAngularTheCompleteGuide/assignment-forms/assignment-forms.component';
import { AssignmentSolutionSekcja15TdFormsComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja15-td-forms/assignment-solution-sekcja15-td-forms.component';
import { AssignmentSolutionSekcja15ReactiveFormsComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja15-reactive-forms/assignment-solution-sekcja15-reactive-forms.component';
import { AssignmentSolutionSekcja152ReactiveFormsComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja15-2-reactive-forms/assignment-solution-sekcja15-2-reactive-forms.component';
import { AssignmentSolutionSekcja17PipesComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja17-pipes/assignment-solution-sekcja17-pipes.component';
import { AssignmentSolutionSekcja9ServicesComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja9-services/assignment-solution-sekcja9-services.component';
import { AssignmentSolutionSekcja18HttpComponent } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja18-http/assignment-solution-sekcja18-http.component';
// tslint:disable-next-line:max-line-length
import { Ng4AuthInterceptorService } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth-interceptor.service';
import { AuthInterceptorService } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja18-http/auth-interceptor.service';
import { LoggingInterceptorService } from './UdemyAngularTheCompleteGuide/assignment-solution-sekcja18-http/logging-interceptor.service';
// import firebase modules
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import {environment} from './environments_old/environment';

import { Ng4RecipesComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.component';
import { Ng4RecipeListComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-list.component';
import { Ng4RecipeDetailComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-detail/ng4-recipe-detail.component';
import { Ng4RecipeItemComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-list/ng4-recipe-item/ng4-recipe-item.component';
import { Ng4RecipeStartComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-start/ng4-recipe-start.component';
import { Ng4RecipeEditComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe-edit/ng4-recipe-edit.component';
import { Ng4ShoppingListComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.component';
import { Ng4ShoppingEditComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-edit/ng4-shopping-edit.component';
import { DropdownDirective } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/dropdown.directive';
import { Ng4AlertComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ng4-alert/ng4-alert.component';
import { Ng4PlaceholderDirective } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ng4-placeholder/ng4-placeholder.directive';
import { Ng4RecipeService } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipe.service';
import { Ng4ShoppingListService } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.service';
import { Ng4AuthComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.component';
import { Ng4RecipesModule } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-recipes/ng4-recipes.module';
import { Ng4ShoppingListModule } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-shopping-list/ng4-shopping-list.module';
import { Ng4AuthModule } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-auth/ng4-auth.module';

import { Ng4LoggingService } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-logging.service';
import { Ng4HeaderComponent } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-header/ng4-header.component';
import { Ng4SharedModule } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/shared/ng4-shared.module';
import { Ng4CoreModule } from './UdemyAngularTheCompleteGuide/ng4-complete-guide/ng4-core.module';
import { ParentComponent } from './AngularTutorials/1_PassDataParentToChild/parent/parent.component';
import { ChildComponent } from './AngularTutorials/1_PassDataParentToChild/child/child.component';
import { TestComponent } from './AngularTutorials/2_EventBinding/test/test.component';
import { TemplateReferenceVariablesComponent } from './AngularTutorials/3_TemplateReferenceVariables/template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './AngularTutorials/4_TwoWayBinding/two-way-binding/two-way-binding.component';
import { StructuralDerectivesComponent } from './AngularTutorials/5_StructuralDirectives/structural-derectives/structural-derectives.component';
import { Child2Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ParentToChild/child2/child2.component';
import { Parent2Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ParentToChild/parent2/parent2.component';
import { Child3Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ChildToParent/child3/child3.component';
import { Parent3Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/ChildToParent/parent3/parent3.component';
import { Child4Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/child4/child4.component';
import { Child5Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/child5/child5.component';
import { Parent4Component } from './AngularTutorials/6_PassingDataFromOneComponentToAnother/AnyToAny_UsungServices/parent4/parent4.component';
import { Child6Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/child6/child6.component';
import { Parent6Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/parent6/parent6.component';
import { Test1Component } from './AngularTutorials/7_PassCheckboxValueOntoComponents/test1/test1.component';
import { Test8Component } from './AngularTutorials/8_HandleCheckBox/test8/test8.component';
import { Parent7Component } from './AngularTutorials/AngularTutorialForBeginers_Codevolution/Part15_ComponentInteraction/parent7/parent7.component';
import { Child7Component } from './AngularTutorials/AngularTutorialForBeginers_Codevolution/Part15_ComponentInteraction/child7/child7.component';

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
    CmpDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentRoutingComponent,
    HomeRoutingComponent,
    EditServerRoutingComponent,
    ServersRoutingComponent,
    ServerRoutingComponent,
    UsersRoutingComponent,
    UserRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    AssignmentSolutionComponent,
    AssignmentSolution2Component,
    AssignmentDirectivesComponent,
    AssignmentServicesComponent,
    AssignmentSolutionSekcja9ServicesComponent,
    AssignmentObservablesComponent,
    AssignmentObservablesUserComponent,
    AssignmentObservablesHomeComponent,
    AssignmentFormsComponent,
    AssignmentSolutionSekcja15TdFormsComponent,
    AssignmentSolutionSekcja15ReactiveFormsComponent,
    AssignmentSolutionSekcja152ReactiveFormsComponent,
    AssignmentSolutionSekcja17PipesComponent,
    AssignmentSolutionSekcja18HttpComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,

    // Ng4RecipesComponent,
    // Ng4RecipeListComponent,
    // Ng4RecipeDetailComponent,
    // Ng4RecipeItemComponent,
    // Ng4RecipeStartComponent,
    // Ng4RecipeEditComponent,

    // Ng4ShoppingListComponent,
    // Ng4ShoppingEditComponent,

    // DropdownDirective,
    // Ng4LoadingSpinnerComponent,
    // Ng4PlaceholderDirective
    // Ng4AlertComponent

    Ng4HeaderComponent,

    ParentComponent,
    ChildComponent,
    TestComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    StructuralDerectivesComponent,
    Child2Component,
    Parent2Component,
    Child3Component,
    Parent3Component,
    Child4Component,
    Child5Component,
    Parent4Component,
    Child6Component,
    Parent6Component,
    Test1Component,
    Test8Component,
    Parent7Component,
    Child7Component

    // Ng4AuthComponent
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
    NgbModule,
    // Ng4RecipesModule,
    // Ng4ShoppingListModule,
    // Ng4AuthModule
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireModule,
    // AngularFirestoreModule
    Ng4SharedModule,
    Ng4CoreModule
  ],
  providers: [
              {provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true},
              AccountsService,
              LoggingService,
              CounterService,
              AuthRoutingService,
              AuthRoutingGuardService,
              CanDeactivateRoutingGuardService,
              ServerRoutingResolverService,
              ObservablesUserService

              // Ng4LoggingService
              // Ng4ShoppingListService,
              // Ng4RecipeService,
              // {provide: HTTP_INTERCEPTORS, useClass: Ng4AuthInterceptorService, multi: true}
           // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},  // komentuję ze względu na problem z CORS
           // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
