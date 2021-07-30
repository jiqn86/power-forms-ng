import { Component, OnInit, Input } from '@angular/core';
import { FormModel } from '../../models/form';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url: string): any{
    console.log(url);
  }
}
