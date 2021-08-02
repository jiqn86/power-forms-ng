import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormModel } from 'src/app/models/form';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: FormModel[] = [];
  loading = true;
  @Output () dataExport: EventEmitter<FormModel[]> = new EventEmitter();
  @Output () loadingExport: EventEmitter<boolean> = new EventEmitter();

  constructor(private dataservice: DataProviderService) { }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
    this.dataExport.emit(this.data);
    this.loading = false;
    this.loadingExport.emit(this.loading);
  }

  searchData(text: string): any{
    let dataArr: FormModel[] = [];
    text = text.toLowerCase();

    for (let item of this.data){
      let name = item.name.toLowerCase();
      if ( name.indexOf(text) >= 0){
        dataArr.push(item);
      }
    }
    this.dataExport.emit(dataArr);
  }

}

