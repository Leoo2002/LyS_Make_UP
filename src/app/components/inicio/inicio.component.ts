import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  getRange(count: number): number[] {
    return Array(count).fill(0).map((_, index) => index);
  }
}
