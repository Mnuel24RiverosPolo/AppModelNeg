import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  product: any;
  _id: number = 0
  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this._id = params['_id'];
      console.log(this._id);
      this.obtenerProductId(this._id)
    })

  }
  obtenerProductId(id: number){
    this.product = this.productService.getProductId(id)
    //.subscribe(
    //   res => {
    //     this.product = res;
    //     console.log(res)
    //   },
    //   err => console.log(err)
    // )
  }
}
