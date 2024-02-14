import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  product: any = {};
  _id: number = 0
  imgUrls: any[] = [
    // {id: 0, url:'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg'},
    // {id: 1, url:'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg'},
    // {id: 2, url:'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg'},
    // {id: 3, url:'https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg'}
  ];
  categoria: string | undefined;
  imgId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriasService,
    private productService: ProductosService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this._id = params['id'];
      console.log(this._id);
    })
    this.obtenerProductId(this._id)
    this.categoria = this.categoriaService.getCategoriaId(this.product.categoria)
    console.log(this.categoria)

  }
  obtenerProductId(id: number){
    this.product = this.productService.getProductId(id)
    this.imgUrls = this.product.image
    console.log(this.product);
    //.subscribe(
    //   res => {
    //     this.product = res;
    //     console.log(res)
    //   },
    //   err => console.log(err)
    // )
  }
  

  slideImage(indice: number) {
    this.imgId = indice;
    console.log(this.imgId);
  }
}