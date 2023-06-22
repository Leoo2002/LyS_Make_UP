import { Injectable } from '@angular/core';
import { Carrito } from '../carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoDeComprasService {

  carrito : Carrito[] = [];
  nro_item = 0

  constructor() { }

  agregarAlCarrito(producto : Carrito){
    
    const productoExistente = this.carrito.find(p => p.id === producto.id && p.variante === producto.variante);
      if (productoExistente) {
        this.carrito[productoExistente.nro_item-1].cantidad += producto.cantidad;
      }else{
        if (this.carrito.length == 0 ){
          producto.nro_item = 1;
        }else{
          producto.nro_item = this.carrito[this.carrito.length - 1].nro_item + 1;
        }
        this.carrito.push(producto);
      }
  }

  getCarrito(): Carrito[]{
    return this.carrito;
  }

  eliminarProducto(producto:Carrito){
    
    const index = this.carrito.findIndex(item => item.nro_item === producto.nro_item);

    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }
}
