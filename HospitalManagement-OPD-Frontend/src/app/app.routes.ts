import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { CsaepaperComponent } from './csaepaper/csaepaper.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminViewAppComponent } from './admin-view-app/admin-view-app.component';
import { RahatopdComponent } from './rahatopd/rahatopd.component';

export const routes: Routes = [
    {path:"rahat",component:RahatopdComponent},
    {path:"hm",component:HomeComponent},
    {path:"contact",component:ContactsComponent },
     {path:"signup",component:SignupComponent},
    {path:"log",component:LoginComponent},
    {path:"app-st",component:AppointmentStatusComponent},
    {path:"app",component:AppointmentComponent},
    {path:"view-pre",component:ViewPrescriptionComponent},
    {path:"case-p",component:CsaepaperComponent},
    {path:"add-pre",component:AddPrescriptionComponent},
    {path:"alog",component:AdminLoginComponent},
    {path:"asign",component:AdminSignupComponent},
      {path:"aview-app",component:AdminViewAppComponent},
    
    




];
