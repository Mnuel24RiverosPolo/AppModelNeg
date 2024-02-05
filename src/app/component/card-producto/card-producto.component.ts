import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  @Input() product: any = {}
  @Output() showDetails = new EventEmitter<number>();

  constructor(){}

  hoveredProduct: any | null = null;

  contactar(nombre: string){
    console.log("redirecting to")
  }
  showDetail() {
    this.hoveredProduct = 'product';
  }

  verDetalles(id: number){
    this.showDetails.emit(id)
  }

  hideDetails() {
    this.hoveredProduct = null;
  }
}
