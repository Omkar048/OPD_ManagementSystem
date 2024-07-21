import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Casepaper } from '../models/casepaper';
import { Patient } from '../models/patient';
import { Prescription } from '../models/prescription';
import { CasepaperService } from '../services/casepaper.service';
import { PatientService } from '../services/patient.service';
import { PrescriptionService } from '../services/prescription.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-add-prescription',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-prescription.component.html',
  styleUrl: './add-prescription.component.css'
})
export class AddPrescriptionComponent  implements OnInit{

  cp:Casepaper[]=[]
select:any
selcase:Casepaper=new Casepaper
pt:Patient=new Patient()
pc:Prescription=new Prescription()
constructor(private cs:CasepaperService,private ps:PatientService,private psc:PrescriptionService)
{

}
ngOnInit(): void {
  this.showallcp()

}
showallcp()
{
this.cs.getAll().subscribe((data:Casepaper[])=>
{
  if(data!=null)
    this.cp=data
}
)
}
showdetails()
{
  this.cs.search(this.select).subscribe((data:Casepaper)=>
  {
    if(data!=null)
    {
      this.selcase=data
      this.ps.search(this.selcase.pid).subscribe((data:Patient)=>
      {
        if(data!=null)
          this.pt=data
      }
      )

    }
  }
  )
}
submitdata()
{
  this.pc.aid=this.selcase.aid
  this.psc.insert(this.pc).subscribe((data:Prescription)=>
 {
  if(data!=null)
  {
    alert("prescription Added Succefull")
  }
 } 
  )
}

}