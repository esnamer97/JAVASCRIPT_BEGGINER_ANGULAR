import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gradient-colors',
  templateUrl: './gradient-colors.component.html',
  styleUrls: ['./gradient-colors.component.css']
})
export class GradientColorsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.background = '#FFFFFF';
  }

  cambiarFondo(){
    var angle = Math.round( Math.random() * 360 );
    var color1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    var color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.elementRef.nativeElement.ownerDocument
            .body.style.background  = "linear-gradient(" + angle + "deg, " + color1 + ", " + color2 + ")";  
  }

}
