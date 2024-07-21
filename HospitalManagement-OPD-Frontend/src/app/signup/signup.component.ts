import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  submitdata(regForm:any){
    if(regForm.valid)
    {
    this.ps.insert(this.p).subscribe((data:Patient)=>{

      if(data!=null)
        alert("registration Successful")
      this.router.navigate(["/log"])
    })
  }
  else
  alert("Plese input valid data")
  }
  p:Patient=new Patient()
constructor(private ps:PatientService,private router:Router)
{

}
}
