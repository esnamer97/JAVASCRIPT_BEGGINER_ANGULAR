import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JavaScriptProjectComponent } from './java-script-project/java-script-project.component';
import { ColorsProjectComponent } from './java-script-project/Projects/Colors_Project/colors-project/colors-project.component';
import { GradientColorsComponent } from './java-script-project/Projects/Colors_Project/gradient-colors/gradient-colors.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'javascriptproject', component: JavaScriptProjectComponent },
  { path: 'javascriptproject/colors', component: ColorsProjectComponent },
  { path: 'javascriptproject/gradient-colors', component: GradientColorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
