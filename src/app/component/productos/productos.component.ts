import { Component } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  page: number = 0
  search: string = ''
  products: any[] = [];
  productsFilters: any = [];
  categorias: any = [];
  cate: string = '';
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
  nextPage() {
    this.page += 3
  }
  prevPage(): void {
    if (this.page > 0)
      this.page -= 3
  }
  onSearchProduct(search: string) {
    this.page = 0
    this.search = search
  }
  filtrarPeliculas(categoria: string) {
    if(this.filtroActivo === true && this.cate === categoria){
      this.filtroActivo = false
    }else{
      this.cate = categoria
      this.filtroActivo = true
      this.productsFilters = this.productsService.getProductsCategories(categoria);

    }
    console.log(this.filtroActivo);
    console.log(this.cate);
  }
}
