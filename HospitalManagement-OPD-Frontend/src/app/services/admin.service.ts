import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
serverurl="http://localhost:8080/opd"
  constructor(private http:HttpClient) { }
  login(eid:any,p:any):Observable<Admin>
  {
    return this.http.get<Admin>(this.serverurl+"/admin/"+eid+"/"+p)
  }
  insert (a:Admin):Observable<Admin>
  {
    return this.http.post<Admin>(this.serverurl+"/admin",a)
  }
}
