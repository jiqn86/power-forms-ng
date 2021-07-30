import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';
import { FormModel } from '../../models/form';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: FormModel[] = [];
  @Output () urltoMain: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  updateData(e: FormModel[]) {
    this.data = e;
  }

  exportUrl(e: string) {
    this.urltoMain.emit(e);
  }
}
