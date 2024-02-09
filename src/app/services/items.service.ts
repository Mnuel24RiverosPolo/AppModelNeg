import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  nav = {
     logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logotipo_Tottus.svg",
     items: [
      {name: "Inicio", ruta: "/home"},
      {name: "Productos", ruta: "/tienda/productos"},
      // {name: "Contactar", ruta: "/contactar"},

     ] ,
  }
  constructor() { }

  getItems(){
    return this.nav.items
  }
  getLogo(){
    return this.nav.logo
  }
}
