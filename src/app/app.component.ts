import { Component, ElementRef, ViewChild,HostListener  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'LyS_Make_Up';
  mostrarBtn = false;

  constructor(private elementRef: ElementRef) {
    this.principioElement = elementRef;
  }
  
  @ViewChild('principio', { static: true }) principioElement: ElementRef;

  scrollToPrincipio() {
    const offset = this.principioElement.nativeElement.offsetTop - 100; // Ajusta el valor 100 según sea necesario
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }  
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.mostrarBtn = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 100;
  }
  
}
