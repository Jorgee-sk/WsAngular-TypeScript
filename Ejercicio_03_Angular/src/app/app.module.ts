import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ProfileSectionComponent,
    FooterComponent,
    AboutMeSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
