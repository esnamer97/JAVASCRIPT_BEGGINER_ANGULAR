import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavaScriptProjectComponent } from './java-script-project/java-script-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ColorsProjectComponent } from './java-script-project/Projects/Colors_Project/colors-project/colors-project.component';
import { GradientColorsComponent } from './java-script-project/Projects/Colors_Project/gradient-colors/gradient-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaScriptProjectComponent,
    DashboardComponent,
    ColorsProjectComponent,
    GradientColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
