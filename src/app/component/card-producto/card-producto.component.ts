import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
  @Input() product: any = {}
  @Output() showDetails = new EventEmitter<number>();

  constructor(
    private router: Router  ){}

  hoveredProduct: any | null = null;

  contactar(nombre: string){
    console.log("redirecting to", nombre);
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
  rutaProduct(id: number) {
      this.router.navigate(['tienda/producto/'+id])
      console.log(id)
  }
}
