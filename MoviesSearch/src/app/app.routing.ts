import { Routes, RouterModule } from '@angular/router';
import { MovieSearchAppComponent } from './movieSerachApp/components/movie-search-app/movie-search-app.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies-search', pathMatch: 'full' },
  { path: 'movies-search', component: MovieSearchAppComponent},
  { path: '**', redirectTo: '' }
]; 

export const appRoutingModule = RouterModule.forRoot(routes);