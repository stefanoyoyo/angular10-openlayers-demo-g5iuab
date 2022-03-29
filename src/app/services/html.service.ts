import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor() {}

  /**Getting an Html paragraph */
  getParagraph(text: string): HTMLElement {
    const textEl = document.createElement('p');
    textEl.innerText = text;
    return textEl;
  }
}