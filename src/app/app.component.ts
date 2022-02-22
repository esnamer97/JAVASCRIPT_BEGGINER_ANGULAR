import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = ['JavaScript_Beginner', 'Future'];
  activeLink = 0;
  background: ThemePalette = 'primary';
}
