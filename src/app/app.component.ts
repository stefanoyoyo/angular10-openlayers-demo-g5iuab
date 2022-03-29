import { Component, VERSION, AfterViewInit } from "@angular/core";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import Overlay from "ol/Overlay";
import {fromLonLat, toLonLat} from 'ol/proj';
// import * as ol from 'ol';square

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  map: Map;

  constructor() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([8.8251100, 45.8205800]),
        zoom: 10
      })
    });


  }

  ngAfterViewInit() {
    this.map.setTarget("map");
    this.squareOnMap(8.8251100, 45.8205800);
    this.addText('hello', 8.8251100, 45.8205800);

    this.squareOnMap(8.8251100, 35.8005800);
    this.addText('world', 8.8251100, 35.8005800);
  }

  /**non funziona, capire perchè */
  addText(word: string, lat, lon) {
    const text = document.getElementById('text').cloneNode() as HTMLElement;
    // text.innerText = word;
    console.log(text)
    const overlay = new Overlay({
      position: fromLonLat([lat, lon]),
      element: text
    });
    this.map.addOverlay(overlay);
  }


  squareOnMap(lat: number, lon: number) {
    const square = document.getElementById('square').cloneNode();
    const pos = fromLonLat([lat, lon]);

    // Aggiungo testo al quadrato. 
    const p = document.createElement('p')
    p.innerText = 'Text in square.'
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
