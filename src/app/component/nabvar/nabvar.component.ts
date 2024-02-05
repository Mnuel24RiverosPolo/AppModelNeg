import { Component, HostListener } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  isMenuActive: boolean = false;
  isScrolled: boolean = false;
  logo = ''
  items: any = []

  constructor(
    private itemsService: ItemsService,
  ){}

  ngOnInit(): void {
    this.logo = this.itemsService.getLogo()
    this.items = this.itemsService.getItems()
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
