import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/models/form';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output () dataExport: EventEmitter<FormModel[]> = new EventEmitter();
  data: FormModel[] = [];

  constructor(private dataservice: DataProviderService) { }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
    this.dataExport.emit(this.data);
  }

  searchData(text: string): any{
    let dataArr: FormModel[] = [];
    text = text.toLowerCase();

    for (let item of this.data){
      let name = item.name.toLowerCase();
      if ( name.indexOf(text) >= 0){
        dataArr.push(item)
      }
    }
    this.dataExport.emit(dataArr);
  }

}
