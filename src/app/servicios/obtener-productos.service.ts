import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  constructor() { }

  listaProductos:Producto[]=[
    new Producto("BAC1986","Base Tejar",990,1350,"El maquillaje fluido Tejar se compone principalmente de una base de calidad, cremosa, sin materia grasa, liviana y de cobertura media. Dando un acabado luminoso y fresco con sus distintos tonos y con un rico aroma."
    ,0,false,"Maquillaje","Tejar",["Tono 1","Tono 2", "Tono 3", "Tono 4"],["http://192.168.0.45:8080/img/baseTejar.jpg","http://192.168.0.45:8080/img/baseTejar2.jpeg","http://192.168.0.45:8080/img/baseTejar.jpg","http://192.168.0.45:8080/img/baseTejar3.jpg"],
    0),

    new Producto("SIIDI!1","Sombra Individual",1450,1817,"Son pigmentadas y versátiles permitiendo lograr looks tranquilos, frescos y sutiles hasta looks más intensos, impactantes y coloridos. Las sombras glam van a revolucionar todos tus make up."
    ,2,true,"Maquillaje","IDI",["Celeste","Violeta", "Rosa", "Dorado"],["http://192.168.0.45:8080/img/sombraIndividualIdi.jpg","http://192.168.0.45:8080/img/sombraIndividualIdi2.jpg","http://192.168.0.45:8080/img/sombraIndividualIdi3.jpg","http://192.168.0.45:8080/img/sombraIndividualIdi4.jpg"],
    0),

    new Producto("DGWI!1","Delineador Gel Whaterproof IDI",2500,2842,"Su tono negro intenso que enamora, es waterproof y posee un pincel suave y preciso. Es de fácil aplicación y duradero. ¿Cómo usarlo o aplicarlo ?    Desliza el pincel haciendo pequeños trazos a lo largo de la línea de las pestañas. Continúa realzando la línea hasta lograr la intensidad que desees."
    ,0,false,"Maquillaje","IDI",["Negro"],["http://192.168.0.45:8080/img/delineadorGelWhaterproofIdi.jpg","http://192.168.0.45:8080/img/delineadorGelWhaterproofIdi2.jpg"],0),

    new Producto("AGC!1","Gliter en Aerosol Cherimoya",1800,2241,"Glitter en Aerosol Ideal para realizar peinados, o dar destellos de brillos y resaltar efectos decorativos logrando una delicada luminosidad a los mismos.Agitar bien antes de usar, aplicar en ambientes ventilados y sobre superficies secas, pulverizar unos segundos a una distancia de 25cm., con el aerosol en posición vertical, dejar secar. Para quitar, realizar un lavado convencional según donde fue aplicado."
    ,0,false,"Maquillaje","CHERIMOYA",["Plata","Oro", "Arcoiris"],["http://192.168.0.45:8080/img/aerosolGlitterCherimoya.jpg","http://192.168.0.45:8080/img/aerosolGlitterCherimoya2.jpg","http://192.168.0.45:8080/img/aerosolGlitterCherimoya3.jpg"],
    0),

    new Producto("MA2C","Maletin aluminio 2 cajones",17000,20121,"Maletín de aluminio con 3 bandejas, maletín de maquillaje es portátil que se adapta a tus cosméticos; garantiza durabilidad, fabricado con marco de aluminio de alta calidad, superficie ABS, llave disponible que pueden evitar cualquier uso no autorizado de tus artículos en el interior."
    ,8,true,"Maquillaje","OTROS",["Gris"],["http://192.168.0.45:8080/img/maletinAluminioMediano.jpg","http://192.168.0.45:8080/img/maletinAluminioMediano2.jpg"],
    0),

    new Producto("LCVE","Labial Cremoso con Vit. E",1600,1908,"Labial de textura cremosa, deja tus labios suaves y humectados con las tonos mas impactantes."
    ,0,false,"Maquillaje","OTROS",["Pink Champagne","Matte Bordeaux", "Pink Glam Perlado"],["http://192.168.0.45:8080/img/labialCremoso.jpg","http://192.168.0.45:8080/img/labialCremoso2.jpg","http://192.168.0.45:8080/img/labialCremoso3.jpg"],
    0) 
  ];

  getListaProductos() : Producto[]{
    return this.listaProductos;
  }

  buscarProducto(id: string): Producto | undefined {
    return this.listaProductos.find(producto => producto.id === id);
  }  
  
}
