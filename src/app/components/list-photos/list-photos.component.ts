import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {
  @Input() photos: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
