import { Component, OnInit } from '@angular/core';
import { ProjectsTemplate } from '../data/projectsTemplate';

@Component({
  selector: 'app-java-script-project',
  templateUrl: './java-script-project.component.html',
  styleUrls: ['./java-script-project.component.css']
})
export class JavaScriptProjectComponent implements OnInit {
  //projects: String[] = ['firstProject', 'secondProject','thirdProject','fourProject'];
  project1 = new ProjectsTemplate('firstProject','','',1);
  project2 = new ProjectsTemplate('secondProject','','',1);
  project3 = new ProjectsTemplate('thirdProject','','',1);
  project4 = new ProjectsTemplate('fourProject','','',1);
  projects: ProjectsTemplate [] = [ this.project1, this.project2, this.project3, this.project4 ];

  constructor() { }

  ngOnInit(): void {
  }

}
