import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FinalCompraComponent } from './components/final-compra/final-compra.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent},
  { path: 'detalleProducto/:mostrarProducto', component: DetalleProductoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'final-compra', component: FinalCompraComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
