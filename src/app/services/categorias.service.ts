import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categorias = [
    { id: '1', name: 'Casacas' },
    { id: '2', name: 'Pantalones' },
    { id: '3', name: 'Shorts' },
    { id: '4', name: 'Camisas' },
    { id: '5', name: 'Zapatillas' },
    { id: '6', name: 'Sandalias' },
    { id: '7', name: 'Faldas' },
    { id: '8', name: 'Zapatos' },
  ]
  constructor() { }

  getCategorias(){
    return this.categorias
  }

  getCategoriaId(id: string){
    return this.categorias.find(p => p.id === id)
    // return this.http.get<any>(this.URL + '/' + id);

  }
}
