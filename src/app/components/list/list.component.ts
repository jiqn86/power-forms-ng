import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';
import { FormModel } from '../../models/form';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: FormModel[] = [];

  constructor( private dataservice: DataProviderService ) { }

  ngOnInit(): void {
    this.data = this.dataservice.getData();
    // console.log(this.data);
  }

  searchItem(text: string): any{
    let dataArr: FormModel[] = [];
    text = text.toLowerCase();

    for (let item of this.data){
      let name = item.name.toLowerCase();
      if ( name.indexOf(text) >= 0){
        dataArr.push(item)
      }
    }
    return dataArr;
  }
}
