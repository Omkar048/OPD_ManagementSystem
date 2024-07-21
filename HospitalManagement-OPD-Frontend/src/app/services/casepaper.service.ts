import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casepaper } from '../models/casepaper';

@Injectable({
  providedIn: 'root'
})
export class CasepaperService {
serverurl="http://localhost:8080/opd"
  constructor(private http:HttpClient) { }
  getAll():Observable<Casepaper[]>
  {
   return  this.http.get<Casepaper[]>(this.serverurl+"/casepaper")
  }
  insert (a:Casepaper):Observable<Casepaper>
  {
    return this.http.post<Casepaper>(this.serverurl+"/casepaper",a)
  }
  delete(id:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/casepaper/"+id)
  }
  update(id:any,a:Casepaper):Observable<Casepaper>
  {
    return this.http.put<Casepaper>(this.serverurl+"/casepaper/"+id,a)
  }
  search(id:any):Observable<Casepaper>
  {
    return this.http.get<Casepaper>(this.serverurl+"/casepaper/"+id)
  }
}
