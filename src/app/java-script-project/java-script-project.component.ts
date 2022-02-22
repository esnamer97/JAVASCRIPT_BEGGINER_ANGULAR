import { Component, OnInit, ElementRef } from '@angular/core';
import { Project, RootObject } from '../data/projectsTemplate';
import { ProjectsServices } from '../services/projectsServices';

@Component({
  selector: 'app-java-script-project',
  templateUrl: './java-script-project.component.html',
  styleUrls: ['./java-script-project.component.css']
})
export class JavaScriptProjectComponent implements OnInit {
  //projects: String[] = ['firstProject', 'secondProject','thirdProject','fourProject'];
  projects: Project[] = [];

  constructor(private projectService : ProjectsServices, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.background = '#FFFFFF';
    this.projectService.getProjects().subscribe(
      e => {
        console.log(e);
        this.projects = e.projects;
      }
    )
  }

}
