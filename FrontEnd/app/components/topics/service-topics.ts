import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceTopics {
  constructor(private _http: Http) {}

  getTesting() {
    return this._http.get('http://localhost:49365/test')
    .map(res => res.json());
  }
}
