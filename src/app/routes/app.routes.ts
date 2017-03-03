import {provideRouterInitializer} from "@angular/router/src/router_module";
import {RouterModule, Routes} from "@angular/router";
import {SignupComponent} from "../components/unprotected/signup/signup.component";
import {SigninComponent} from "../components/unprotected/signin/signin.component";
import {ProtectedComponent} from "../components/protected/protected.component";
/**
 * Created by keilc on 3/03/2017.
 */

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'protected', component: ProtectedComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
