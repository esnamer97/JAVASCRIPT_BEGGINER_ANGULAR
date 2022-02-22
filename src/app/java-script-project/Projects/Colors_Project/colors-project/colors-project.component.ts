import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-project',
  templateUrl: './colors-project.component.html',
  styleUrls: ['./colors-project.component.css']
})
export class ColorsProjectComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.background = '#FFFFFF';
  }

  cambiarFondo(){
    this.elementRef.nativeElement.ownerDocument
            .body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);    
  }

}
