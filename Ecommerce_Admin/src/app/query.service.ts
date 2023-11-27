import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryService {

  constructor(private http:HttpClient) { }
  serviceUrl = "http://localhost:3001/query";

  getQueries() {
    return this.http.get(this.serviceUrl)
  }

  resolveQuery(id:any,value:string,email:string) {
    return this.http.post(this.serviceUrl+'/resolve', {id,value,email})
  }

}
