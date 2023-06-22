export class Carrito{
    constructor(id:string,nro_item:number,nombre:string,precioMayor:number,precioMenor:number,descuento:number,conDescuento:boolean,variante:string, imagen:string,cantidad:number){
        this.id = id
        this.nro_item=nro_item;
        this.nombre=nombre;
        this.precioMayor=precioMayor;
        this.precioMenor=precioMenor;
        this.descuento=descuento;
        this.conDescuento=conDescuento;
        this.variante=variante;
        this.imagen=imagen;
        this.cantidad=cantidad;
        this.subtotalProductoMayor = cantidad*precioMayor;
        this.subtotalProductoMenor = cantidad*precioMenor;
    }
    
    //variables
    id=""
    nro_item=0;
    nombre="";
    precioMayor=0;
    precioMenor=0;
    descuento= 10;
    conDescuento=false;
    variante:string="";
    imagen:string="";
    cantidad=1;
    subtotalProductoMayor=0;
    subtotalProductoMenor=0;
}