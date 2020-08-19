import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MastheadComponent } from './Components/masthead/masthead.component';
import { PortfolioGridComponent } from './Components/portfolio-grid/portfolio-grid.component';
import { PortfolioModalsComponent } from './Components/portfolio-modals/portfolio-modals.component';
import { ServicesComponent } from './Components/services/services.component';
import { TeamComponent } from './Components/team/team.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    MastheadComponent,
    PortfolioGridComponent,
    PortfolioModalsComponent,
    ServicesComponent,
    TeamComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
