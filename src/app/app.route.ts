import {Routes} from '@angular/router'
import { LoginComponent } from './authentication/login/login.component';

export const APP_ROUTES=[
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
]