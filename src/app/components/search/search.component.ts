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
  @Output () loadingExport: EventEmitter<boolean> = new EventEmitter();

  info: FormModel[] = [];
  loading = true;
  
  // data: FormModel[] = [];

  constructor(private dataservice: DataProviderService) {
    this.loading = true;
    // jsonplaceholder - Servicio photos
    this.dataservice.getInfo().subscribe(resp => {
      this.info = resp;
      this.dataExport.emit(this.info);
      console.log(this.info);
      this.loading = false;
      this.loadingExport.emit(this.loading);
    });
  }

  ngOnInit(): void {

    // this.data = this.dataservice.getData();
    // this.dataExport.emit(this.data);
    // this.loading = false;
    // this.loadingExport.emit(this.loading);
  }

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

