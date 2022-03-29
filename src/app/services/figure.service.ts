import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor() {}

  getFigure(figure: string) {
    switch(figure) {
      case 'square': 
        return this.getSquare();
        break;
      case 'circle': 
        break;
    }
    return null;
  }
  
  getSquare(): HTMLElement {
    const square = document.createElement('div');
    square.id = 'square';
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'red'
    return square;
  }
  
  getCircle(): HTMLElement {
    const square = document.createElement('div');
    square.id = 'circle';
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.borderRadius = '2em;'
    square.style.backgroundColor = 'red'
    return square;
  }

}