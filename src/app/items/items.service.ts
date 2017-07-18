import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Item } from '../model/item';

@Injectable()
export class ItemsService {

  private data: string = './assets/data.json';

  constructor(private http: Http) {}

  getFeedContent(): Observable<Item> {
    return this.http.get(this.data)
                    .map(this.extractItems)
                    .catch(this.handleError);
  }

  private extractItems(res: Response): Item {
    let data = res.json();
    return data;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}`: 'Server Error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

}
