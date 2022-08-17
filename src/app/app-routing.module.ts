import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [ 
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component:  LoginComponent},
      { path: '**', component: ErrorComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


