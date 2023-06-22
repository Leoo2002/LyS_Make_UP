import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { Carrito } from 'src/app/carrito.model';
import { CarritoDeComprasService } from 'src/app/servicios/carrito-de-compras.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  carritoObtenido : Carrito[] = [];
  total:number;
  subtotalMenor : number;
  subtotalMayor:number;
  mayor: boolean = false;
  precio : number;
  subtotalFila:number;
  cantidadProductos:number=0;
  descuento=0;
  productoAEliminar:Carrito;

  constructor(private obtenerCarrito:CarritoDeComprasService){
    this.carritoObtenido = obtenerCarrito.getCarrito();
    this.calcularPrecio();
    this.calcularMayor();
    this.calcularTotal();
  }

  calcularMayor() {
    this.mayor = this.subtotalMenor > 5000;
  }
  

  calcularPrecio(){
    this.subtotalMayor = 0;
    this.subtotalMenor = 0;
    this.cantidadProductos = 0;
    for (let producto of this.carritoObtenido) {
      this.subtotalMenor += producto.precioMenor * producto.cantidad;
      this.subtotalMayor += producto.precioMayor * producto.cantidad; 
      producto.subtotalProductoMayor = producto.precioMayor * producto.cantidad;
      producto.subtotalProductoMenor = producto.precioMenor * producto.cantidad;
      this.cantidadProductos += producto.cantidad; 
    }
  }

  actualizaDatos(){
    this.calcularPrecio();
    this.calcularMayor();
    this.calcularTotal();
  }

  eliminarArticulo(){
    this.obtenerCarrito.eliminarProducto(this.productoAEliminar);
    this.actualizaDatos();
  }

  calcularTotal(){
    if(this.mayor){
      if(this.subtotalMayor>250000){
        this.descuento = 15;
        this.total = this.subtotalMayor *0.85;
      }else{
        if(this.subtotalMayor>150000){
          this.descuento = 10;
          this.total = this.subtotalMayor *0.90;
        }else{
          if(this.subtotalMayor>50000){
            this.descuento = 5;
            this.total = this.subtotalMayor *0.95;
          }else{
            if(this.subtotalMayor<50000){
              this.descuento = 0;
              this.total = this.subtotalMayor;
            }
          }
        }
      }
    }else{
      this.total = this.subtotalMenor;
    }
  }

  productoEliminar(producto:Carrito){
    this.productoAEliminar = producto;
  }
}
