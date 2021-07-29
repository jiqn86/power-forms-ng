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

  constructor() { }

  ngOnInit(): void {}

  updateData(e: FormModel[]) {
    this.data = e;
  }
}
