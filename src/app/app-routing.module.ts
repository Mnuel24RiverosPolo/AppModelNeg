import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductosComponent } from './component/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '/home',
    component: HomeComponent
  },
  {
    path: '/tienda/producto/:id',
    component: ProductoComponent
  },
  {
    path: '/tienda/productos',
    component: ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
