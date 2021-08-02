import { Component, EventEmitter, Output } from '@angular/core';
import { FormModel } from '../../models/form';
import { LoadingModel } from '../../models/loading';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output () urltoMain: EventEmitter<string> = new EventEmitter();

  error = false;
  info: FormModel[] = [];
  loading = true;

  constructor() {}

  /**
   * Emits the URL to the parent component
   * @param e string The URL of the PDF to show or download
   */
  exportUrl(e: string): void {
    this.urltoMain.emit(e);
  }

  /**
   * Sets the loading and error flags
   * @param e any The object with loading and error info
   */
  getLoading(e: LoadingModel): void {
    this.loading = e.loading;
    this.error = e.error;
  }

  /**
   * Sets the datato the info var
   * @param e FormModel
   */
  updateData(e: FormModel[]): void {
    this.info = e;
  }

}
