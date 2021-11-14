import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {UserProfileComponent} from './auth/user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {ViewPostComponent} from './post/view-post/view-post.component';
import {CreateSubredditComponent} from './subreddit/create-subreddit/create-subreddit.component';
import {ListSubredditsComponent} from './subreddit/list-subreddits/list-subreddits.component';
import {ViewSubredditComponent} from './subreddit/view-subreddit/view-subreddit.component';
import {ViewProductComponent} from './product/view-product/view-product.component';
import {ViewPolicyComponent} from './policy/view-policy/view-policy.component';
import {ViewSearchPoliciesComponent} from './policy/view-search-policies/view-search-policies.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {CreatePolicyComponent} from './policy/create-policy/create-policy.component';
import {ListPolicyComponent} from './policy/list-policy/list-policy.component';
import {PolicyDataDetailsComponent} from './policy/policy-data-details/policy-data-details.component';
import {CreateBlogPostComponent} from './blog-post/create-blog-post/create-blog-post.component';
import {ViewBlogPostComponent} from './blog-post/view-blog-post/view-blog-post.component';
import {AuthGuard} from './auth/auth.guard';
import {HomeRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/home-routing/home-routing.component';
import {UsersRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/users-routing/users-routing.component';
import {ServersRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/servers-routing.component';
import {UserRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/users-routing/user-routing/user-routing.component';
import {ServerRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing.component';
import {EditServerRoutingComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/edit-server-routing.component';
import {PageNotFoundComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/page-not-found/page-not-found.component';
import {AuthRoutingGuardService} from './UdemyAngularTheCompleteGuide/assignment-routing/auth-routing-guard.service';
import {CanDeactivateRoutingGuardService} from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/edit-server-routing/can-deactivate-routing-guard.service';
import {ErrorPageComponent} from './UdemyAngularTheCompleteGuide/assignment-routing/error-page/error-page.component';
import {ServerRoutingResolverService} from './UdemyAngularTheCompleteGuide/assignment-routing/servers-routing/server-routing/server-routing-resolver.service';

const appRoutes: Routes = [
    // { path: '/', component: HomeComponent },   komentuje, bo dużo różnych aplikacji można będzie odpalać
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'view-post/:id', component: ViewPostComponent },
    { path: 'view-blog-post/:id', component: ViewBlogPostComponent },
    { path: 'user-profile/:name', component: UserProfileComponent /*, canActivate: [AuthGuard]*/ },
    { path: 'list-subreddits', component: ListSubredditsComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: 'list-policy', component: ListPolicyComponent },
    { path: 'policies-data/:id', component: PolicyDataDetailsComponent},
    { path: 'view-subreddit/:id', component: ViewSubredditComponent },
    { path: 'view-product/:id', component: ViewProductComponent },
    { path: 'view-policy/:id', component: ViewPolicyComponent },
    { path: 'policy-data-details/:id', component: PolicyDataDetailsComponent},
    { path: 'search-policy/:keyword', component: ViewSearchPoliciesComponent },
    { path: 'create-blog-post', component: CreateBlogPostComponent, canActivate: [AuthGuard] },
    { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
    { path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard] },
    { path: 'create-product', component: CreateProductComponent, canActivate: [AuthGuard] },
    { path: 'create-policy', component: CreatePolicyComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignupComponent },
    { path: 'login', component: LoginComponent },

    // app-assignment-routing
    { path: 'home-routing', component: HomeRoutingComponent },      /* localhost:4200/home-routing */
    { path: 'users-routing', component: UsersRoutingComponent, children: [
        { path: ':id/:name', component: UserRoutingComponent }
      ] },
    {
      path: 'servers-routing',
      // canActivate: [AuthRoutingGuardService],
      canActivateChild: [AuthRoutingGuardService],
      component: ServersRoutingComponent,
      children: [
        { path: ':id', component: ServerRoutingComponent, resolve: {serverRoutingResolverService: ServerRoutingResolverService} },
        { path: ':id/edit', component: EditServerRoutingComponent, canDeactivate: [CanDeactivateRoutingGuardService] }
      ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
