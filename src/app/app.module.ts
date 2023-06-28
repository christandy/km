import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UiDesignComponent } from './ui-design/ui-design.component';
import { UiDevelopmentComponent } from './ui-development/ui-development.component';
import { UxDesignComponent } from './ux-design/ux-design.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UiDesignComponent,
    UiDevelopmentComponent,
    UxDesignComponent,
    AccessibilityComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
