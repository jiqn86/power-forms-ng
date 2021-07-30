import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: any = {};
  @Output () urlExport: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url: string): any{
    this.urlExport.emit(url);
  }
}
