import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FinalCompraComponent } from './components/final-compra/final-compra.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { ObtenerProductosService } from './servicios/obtener-productos.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    DetalleProductoComponent,
    CarritoComponent,
    FinalCompraComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ObtenerProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
