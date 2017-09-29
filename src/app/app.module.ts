import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { MailService } from './services/mail.service';

// Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MembersComponent } from './components/members/members.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EndcComponent } from './components/endc/endc.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MembersComponent,
    GalleryComponent,
    NavbarComponent,
    EndcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
