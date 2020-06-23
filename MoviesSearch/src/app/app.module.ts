import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieSearchAppService } from './movieSerachApp/movie-search-app/movie-search-app.service';
import { MovieSearchAppComponent } from './movieSerachApp/components/movie-search-app/movie-search-app.component';
//import { MovieSearchAppComponent } from './movieSerachApp/components/movie-search-app/movie-search-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchAppComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [MovieSearchAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }