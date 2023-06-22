import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../producto.model';
import { ObtenerProductosService } from 'src/app/servicios/obtener-productos.service';
import { Carrito } from 'src/app/carrito.model';
import { CarritoDeComprasService } from 'src/app/servicios/carrito-de-compras.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{

  productos:Producto[]; 
  constructor(private router:Router,private route:ActivatedRoute, private obtenerProductos:ObtenerProductosService,private CarritoDeComprasService: CarritoDeComprasService){
  }

  ngOnInit(){
    this.productos = this.obtenerProductos.getListaProductos();
    this.id = this.route.snapshot.params['mostrarProducto'];

    this.mostrarProducto = this.obtenerProductos.buscarProducto(this.id); 
    this.opcionSeleccionada = this.mostrarProducto.variantes[0];
  }

  redireccionarAProductos(){
    this.router.navigate(['productos'])
  }

  id:string;
  mostrarProducto:Producto;
  opcionSeleccionada= "-1";
  cantidadSeleccionada = 1;
  productoComprado : Carrito;
  error = false;

  agregarAlCarrito(producto:Producto, opcion:string, cantidad:number){
    if(this.opcionSeleccionada != "-1" && cantidad > 0){
      
      this.productoComprado = new Carrito (producto.id,0,producto.nombre,producto.precioMayor,producto.precioMenor,producto.descuento,
      producto.conDescuento,opcion,producto.imagenes[0],cantidad);
      this.CarritoDeComprasService.agregarAlCarrito(this.productoComprado);
      this.error = false;
    }
    else{
      this.error=true;
    }
  }

  getRange(count: number): number[] {
    return Array(count).fill(0).map((_, index) => index);
  }
}
