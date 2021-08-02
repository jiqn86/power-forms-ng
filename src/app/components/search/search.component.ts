import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormModel } from 'src/app/models/form';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output () dataExport: EventEmitter<FormModel[]> = new EventEmitter();
  @Output () loadingExport: EventEmitter<any> = new EventEmitter();

  info: FormModel[] = [];
  loadingInfo = {loading: true, error: false};

  constructor(private dataservice: DataProviderService) {}

  /**
   * NG life cycle
   */
  ngOnInit(): void {
    this.getInitData();
  }

  /**
   * Gets init data from the server
   */
  getInitData(): void {
    this.dataservice.getInfo().subscribe(
      resp => {
        this.info = resp;
        this.dataExport.emit(this.info);
        this.loadingInfo = {loading: false, error: false};
        this.loadingExport.emit(this.loadingInfo);
      }, () => {
        this.loadingInfo = {loading: false, error: true};
        this.loadingExport.emit(this.loadingInfo);
      });
  }

  /**
   * Searches by the text in the parameter
   * @param text string, the text to search by
   */
  searchData(text: string): any{
    let dataArr: FormModel[] = [];
    text = text.toLowerCase();

    for (let item of this.info){
      let name = item.name.toLowerCase();
      if ( name.indexOf(text) >= 0){
        dataArr.push(item);
      }
    }
    this.dataExport.emit(dataArr);
  }

}

