import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Carrito } from 'src/app/carrito.model';
import { CarritoDeComprasService } from 'src/app/servicios/carrito-de-compras.service';
import { ObtenerProductosService } from 'src/app/servicios/obtener-productos.service';
import { Producto } from '../../producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements AfterViewInit{

  // estos datos provendrian de la base de datos
  productos:Producto[];
  mostrarProducto : Producto;
  productoComprado : Carrito;
  opcionSeleccionada = "-1";
  cantidadSeleccionada = 1;
  error = false;
  imagenSeleccionada: number = 0;


  constructor(private elementRef: ElementRef, private obtenerProductos: ObtenerProductosService, private CarritoDeComprasService: CarritoDeComprasService){
    this.productos = this.obtenerProductos.getListaProductos();
    this.mostrarProducto = this.productos[0];
  }

  @ViewChild('principio', { static: true }) principioElement: ElementRef;
  ngAfterViewInit() {
    this.principioElement = this.elementRef;
  }

  setMostrarProducto(producto:Producto){
    this.mostrarProducto = producto;
    this.opcionSeleccionada = this.mostrarProducto.variantes[0];
  }


  agregarAlCarrito(producto:Producto, opcion:string, cantidad:number){
    if(this.opcionSeleccionada != "-1" && cantidad > 0){
      
      this.productoComprado = new Carrito (producto.id,0,producto.nombre,producto.precioMayor,producto.precioMenor,producto.descuento,
      producto.conDescuento,opcion,producto.imagenes[0],cantidad);
      this.CarritoDeComprasService.agregarAlCarrito(this.productoComprado);
      console.log("Agregado");
      this.opcionSeleccionada = "-1";
      this.cantidadSeleccionada = 1;
      this.error = false;
    }
    else{
      console.log("error");
      this.error=true;
    }
  }

  scrollToPrincipio() {
    const offset = this.principioElement.nativeElement.offsetTop - 100; // Ajusta el valor 100 según sea necesario
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }  
}
