import { Component, VERSION, AfterViewInit } from "@angular/core";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Overlay from "ol/Overlay";
import {fromLonLat, toLonLat} from 'ol/proj';
import { FigureService } from "./services/figure.service";
import { HtmlService } from "./services/html.service";
// import * as ol from 'ol';square

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  map: Map;

  constructor(public figure: FigureService, public html: HtmlService) {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([8.8251100, 45.8205800]),
        zoom: 5
      })
    });


  }

  ngAfterViewInit() {
    this.map.setTarget("map");

    // Quadrato più testo a varese
    this.squareOnMap(8.8251100, 45.8205800);
    this.addText('Varese', 8.8251100, 45.8205800);

    // Quadrato più testo in libria somewhere 
    this.squareOnMap(8.8251100, 35.8005800);
    this.addText('Libia', 8.8251100, 35.8005800);
  }

  /**Adding text on map at the specified lat and lon */
  addText(word: string, lat: number, lon: number) {
    const textEl = this.html.getParagraph(word);
    textEl.style.transform = 'translate(0%, -100%)';
    textEl.style.color = '#0000FF'

    // Creo un livello e provo ad inserivi su testo
    const overlay = new Overlay({
      position: fromLonLat([lat, lon]),
      element: textEl
    });
    this.map.addOverlay(overlay); 
  }

  /** Aggiunta di un livello alla mappa contenente un quadrato. */
  squareOnMap(lat: number, lon: number) {
    const square = this.figure.getFigure('square')
    const pos = fromLonLat([lat, lon]);

    // Aggiungo testo al quadrato. 
    const p =  this.html.getParagraph('Text in square.')
    square.appendChild(p);

    // creo il livello dove inserisco il quadrato
    const overlay = new Overlay({
      element: square,
      position: pos
    })

    // Aggiungo il quadrato
    this.map.addOverlay(overlay);
  }



}
