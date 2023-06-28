import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UxDesignComponent } from "./ux-design/ux-design.component";
import { UiDesignComponent } from "./ui-design/ui-design.component";
import { UiDevelopmentComponent } from "./ui-development/ui-development.component";
import { AccessibilityComponent } from "./accessibility/accessibility.component";

const routes: Routes = [
  { path:  'home', component:  HomeComponent},
  { path:  'ux-design', component:  UxDesignComponent},
  { path:  'ui-design', component:  UiDesignComponent},
  { path:  'ui-development', component:  UiDevelopmentComponent},
  { path:  'accessibility', component:  AccessibilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
