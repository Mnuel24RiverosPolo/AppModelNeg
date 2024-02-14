import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  products = [
    { id: 1, name: "Adidas", price: 240.99, description: "zapatillas deportivas", cantidad: 1, categoria: '2', image: ["../../assets/c01verde1.png", ""] },
    { id: 2, name: "Negro ", price: 240.99, description: "Sandalias chalitas", cantidad: 1,categoria: '3', image: ["../../assets/c1Negro.png", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 3, name: "Puma", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '1', image: ["../../assets/c1morado.png", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 4, name: "Vans", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '4', image: ["../../assets/c5negro.png", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 5, name: "Cheroke", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '6', image: ["../../assets/c5satinado.png", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 6, name: "North Star", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '2', image: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 7, name: "Platanitos", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '1', image: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
    { id: 8, name: "Jhordan", price: 240.99, description: "zapatillas deportivas", cantidad: 1,categoria: '2', image: ["https://thn.pe/cdn/shop/products/B75806_6.jpg?v=1691598427&width=1946", "https://coliseum.vteximg.com.br/arquivos/ids/556587-1000-1000/Casaca-Hombre-Umbro-Chaqueta-Moda-Chile-UW2309H-Y70_1.jpg?v=638180460584330000"] },
  ]
  constructor() { }
  getProductos(){
    return this.products;
  }
  getProductId(id: number) {
    return this.products.find(p => p.id == id)
  }
  getProductsCategories(id: string){
    return this.products.filter(product => product.categoria === id);
  }
}
