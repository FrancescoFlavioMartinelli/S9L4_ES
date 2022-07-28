import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { PostCardComponent } from './post-card/post-card.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnteprimaPipe } from './anteprima.pipe';
import { EvidenziaDirective } from './evidenzia.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    PostCardComponent,
    DettagliComponent,
    NavbarComponent,
    AnteprimaPipe,
    EvidenziaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
