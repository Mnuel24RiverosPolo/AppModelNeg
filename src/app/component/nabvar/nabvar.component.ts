import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  isMenuActive: boolean = false;
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
