import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormModel } from '../../models/form';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output () urltoMain: EventEmitter<string> = new EventEmitter();

  info: FormModel[] = [];
  loading = true;
  error = false;

  constructor() {}

  ngOnInit(): void {
  }

  getLoading(e: any){
    console.log
    this.loading = e.loading;
    this.error = e.error;
  }
  updateData(e: FormModel[]) {
    this.info = e;
  }

  exportUrl(e: string) {
    this.urltoMain.emit(e);
  }
}
