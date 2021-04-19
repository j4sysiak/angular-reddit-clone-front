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
// import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    // { path: '/', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'view-post/:id', component: ViewPostComponent },
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
    { path: 'create-blog-post', component: CreateBlogPostComponent  /*, canActivate: [AuthGuard]*/ },
    { path: 'create-post', component: CreatePostComponent  /*, canActivate: [AuthGuard]*/ },
    { path: 'create-subreddit', component: CreateSubredditComponent   /*, canActivate: [AuthGuard]*/ },
    { path: 'create-product', component: CreateProductComponent },
    { path: 'create-policy', component: CreatePolicyComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
