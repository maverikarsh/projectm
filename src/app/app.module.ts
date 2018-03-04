import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {APP_ROUTES} from './app.route';
import {HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, 
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
