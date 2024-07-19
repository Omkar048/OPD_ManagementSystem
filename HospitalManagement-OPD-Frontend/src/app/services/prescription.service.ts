import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prescription } from '../models/prescription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
serverurl="http://localhost:8080/opd"
  constructor(private http:HttpClient) { }
  getAll():Observable<Prescription[]>
  {
   return  this.http.get<Prescription[]>(this.serverurl+"/prescription")
  }
  insert (a:Prescription):Observable<Prescription>
  {
    return this.http.post<Prescription>(this.serverurl+"/prescription",a)
  }
  delete(id:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/prescription/"+id)
  }
  update(id:any,a:Prescription):Observable<Prescription>
  {
    return this.http.put<Prescription>(this.serverurl+"/prescription/"+id,a)
  }
  search(id:any):Observable<Prescription>
  {
    return this.http.get<Prescription>(this.serverurl+"/prescription"+id)
  }
  getAllP(id:any):Observable<Prescription[]>
  {
   return  this.http.get<Prescription[]>(this.serverurl+"/prescription/app/"+id)
  }
}
