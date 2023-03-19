import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ClearmeComponent } from './clearme/clearme.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TopbarComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ProfileDataComponent,
    ClearmeComponent,
  ],
  imports: [
    MaterialModule,
    MatToolbarModule,
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
