import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NabvarComponent } from './component/nabvar/nabvar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardProductoComponent } from './component/card-producto/card-producto.component';
import { ProductoComponent } from './component/producto/producto.component';
import { FiltroProductoPipe } from './pipes/filtro-producto.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NabvarComponent,
    FooterComponent,
    CardProductoComponent,
    ProductoComponent,
    FiltroProductoPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
