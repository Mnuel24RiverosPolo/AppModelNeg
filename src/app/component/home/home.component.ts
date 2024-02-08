import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any = [];
  search: string = ''
  categorias: any = [];
  categoriaSeleccionada: string = '';
  filtroActivo: boolean = false
  
  constructor(
    private productsService: ProductosService,
    private categoriasService: CategoriasService
  ) { }
  ngOnInit(): void {
    this.products = this.productsService.getProductos()
    this.categorias = this.categoriasService.getCategorias()
  }

  onSearchProduct(search: string) {
    this.search = search
  }
  filtrarPeliculas(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.filtroActivo = true
    console.log(this.categoriaSeleccionada);

  }
  
}
