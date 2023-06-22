export class Producto{
    
    constructor(id:string,nombre:string,precioMayor:number,precioMenor:number,descripcion:string,descuento:number,conDescuento:boolean,categoria:string,marca:string,variantes:string[],
    imagenes:string[],cantidad:number){

        this.id=id;
        this.nombre=nombre;
        this.precioMayor=precioMayor;
        this.precioMenor=precioMenor;
        this.descripcion=descripcion;
        this.descuento=descuento;
        this.conDescuento=conDescuento;
        this.categoria=categoria;
        this.marca=marca;
        this.variantes=variantes;
        this.imagenes=imagenes;
        this.cantidad=cantidad;
    }
    
    //variables
    id="";
    nombre="";
    precioMayor=0;
    precioMenor=0;
    descripcion="";
    descuento= 10;
    conDescuento=false;
    categoria="";
    marca="";
    variantes:string[]=[];
    imagenes:string[]=[];
    cantidad=1;
}