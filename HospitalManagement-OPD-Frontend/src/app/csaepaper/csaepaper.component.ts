import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Casepaper } from '../models/casepaper';
import { Appointment } from '../models/appointment';
import { Patient } from '../models/patient';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';
import { CasepaperService } from '../services/casepaper.service';

@Component({
  selector: 'app-csaepaper',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './csaepaper.component.html',
  styleUrl: './csaepaper.component.css'
})
export class CsaepaperComponent implements OnInit{
a:Appointment[]=[]
selapp:any
pt:Patient=new Patient()
cp:Casepaper=new Casepaper()
constructor(private as:AppointmentService,private ps:PatientService,private cs:CasepaperService )
{

}
ngOnInit(): void {
  this.showapps()

}
showapps()
{
  this.as.getAll().subscribe((data:Appointment[])=>
  {
    if(data!=null)
      this.a=data
  }
  )
}
showdetails()
{
  this.as.search(this.selapp).subscribe((data:Appointment)=>
  {
    if(data!=null)
    {
      this.ps.search(data.pid).subscribe((datap:Patient)=>
      {
        if(data!=null)
          this.pt=datap
      }
      )
    }
})
}
submitdata()
{
  this.cp.aid=this.selapp
  this.cp.pid=this.pt.pid
  this.cp.dt=new Date().toDateString()
  this.cs.insert(this.cp).subscribe((data:Casepaper)=>
  {
    if(data!=null)
      alert("Case Paper Added Successfully")
  }
  )
}

}
