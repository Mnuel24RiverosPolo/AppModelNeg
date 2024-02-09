import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  page: number = 0
  search: string = ''
  products: any[] = [];
  
  constructor(
    private productsService: ProductosService,
  ) { }
  ngOnInit(): void {
    this.products = this.productsService.getProductos()
  }
  nextPage() {
    this.page += 3
  }
  prevPage(): void {
    if (this.page > 0)
      this.page -= 3
  }
  
}
