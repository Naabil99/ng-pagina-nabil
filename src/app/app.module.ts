import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { entrenadorItemComponent } from './entrenador-item/entrenador-item.component';
import { entrenadorDetailComponent } from './entrenador-detail/entrenador-detail.component';
import { entrenadorService } from './shared/entrenador.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { entrenadorEditComponent } from './entrenador-edit/entrenador-edit.component';
import { entrenadorData } from './shared/entrenador-data';
import { HttpClientModule } from '@angular/common/http';
import { entrenadorNewComponent } from './entrenador-new/entrenador-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    entrenadorItemComponent,
    entrenadorDetailComponent,
    entrenadorEditComponent,
    entrenadorNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(entrenadorData)
  ],
  providers: [entrenadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
