import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any = [];
  search: string = ''
  constructor(
    private productsService: ProductosService,
  ) { }
  ngOnInit(): void {
    this.products = this.productsService.getProductos()
    // .subscribe(
    //     res => {
    //       this.products = res;
    //       console.log(this.products)
    //     },
    //     err => console.log(err)
    //   )
  }

  onSearchProduct(search: string) {
    this.search = search
  }
}
