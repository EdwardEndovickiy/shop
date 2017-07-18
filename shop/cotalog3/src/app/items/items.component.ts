import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ItemsService } from './items.service';
import { Item } from '../model/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ ItemsService ]
})
export class ItemsComponent implements OnInit {
  items: any;

  constructor(private http:Http, private itemsService: ItemsService) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.itemsService.getFeedContent()
        .subscribe(
                   item => this.items = item,
                   error => console.log(error));
  }
  private onOriginal(link: string){
    window.open(link);
  }

}
