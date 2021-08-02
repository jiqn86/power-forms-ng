import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() item: any = {};
  @Output () urlExport: EventEmitter<string> = new EventEmitter();

  constructor() { }

  /**
   * Emits the url to the parent component
   * @param url string
   */
  getUrl(url: string): void{
    this.urlExport.emit(url);
  }
}
