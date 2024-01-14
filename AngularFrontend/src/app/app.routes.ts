import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/forms/post/post.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path : 'home', component: HomeComponent},
    {path : 'perfil', component: PerfilComponent},
    {path : 'posts/create', component: PostComponent},
    { path: 'editPost/:id', component: PostComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
