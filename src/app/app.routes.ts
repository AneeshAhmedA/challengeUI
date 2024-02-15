import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddconferenceComponent } from './pages/addconference/addconference.component';
import { ConferencebyidComponent } from './pages/conferencebyid/conferencebyid.component';
import { GetallconferencesComponent } from './pages/getallconferences/getallconferences.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchconferenceComponent } from './pages/searchconference/searchconference.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"getconference",component:GetallconferencesComponent},
    {path:"addconference",component:AddconferenceComponent},
    {path:"getbyid/:cid",component:ConferencebyidComponent},
    {path:"search:cid",component:SearchconferenceComponent},
    { path: '', component: LoginComponent },
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        children: [
            {path:"getbyid/:cid",component:ConferencebyidComponent},
            {path:"login",component:LoginComponent},
            {path:"search:cid",component:SearchconferenceComponent},
            {path:"getconference",component:GetallconferencesComponent},
        ],
    },
    {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        children: [
            {path:"addconference",component:AddconferenceComponent},
            {path:"search:cid",component:SearchconferenceComponent},
            {path:"login",component:LoginComponent},
        ],
    },
];
