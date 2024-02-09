import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product.model';

@Pipe({
  name: 'filtroLimit'
})
export class FiltroLimitPipe implements PipeTransform {

  transform(productos: Product[], page: number = 0, search: string = ''): Product[] {

    if (search.length === 0)
      return productos.slice(page, page + 3);
    
    const filtrandoPeliculas = productos.filter(prod => prod.name.includes(search));
    return filtrandoPeliculas.slice(page, page + 3)
  }

}
