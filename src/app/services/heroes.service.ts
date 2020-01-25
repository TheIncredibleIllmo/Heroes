import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: Heroe [] = [
    {
      name: 'Aquaman',
      bio: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: "assets/img/aquaman.png",
      aparition: "1941-11-01",
      publisher:"DC",
      color:"#FFE168",
      hovered: false
    },
    {
      name: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparition: "1939-05-01",
      publisher:"DC",
      color:"#000",
      hovered: false
    },
    {
      name: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparition: "1964-01-01",
      publisher: "Marvel",
      color:"#BD1E2B",
      hovered: false
    },
    {
        name: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparition: "1962-05-01",
      publisher:"Marvel",
      color:"#92AA6D",
      hovered: false
    },
    {
        name: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparition: "1940-06-01",
      publisher: "DC",
      color:"#3D6136",
      hovered: false

    },
    {
        name: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparition: "1962-08-01",
      publisher: "Marvel",
      color:"#FB423E",
      hovered: false
    },
    {
        name: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparition: "1974-11-01",
      publisher: "Marvel",
      color:"#FED215",
      hovered: false
    }
  ];

    constructor() {
        console.log('Service is ready');
    }

    public getHerores(): Heroe [] {
        return this.heroes;
    }

    public getHeroe(id: number): Heroe {
      return this.heroes[id];
    }
}


export interface Heroe {
    name: string;
    bio: string;
    img: string;
    aparition: string;
    publisher: string;
    color: string;
    hovered: boolean;
}


