import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { routes } from '../app.routes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
a:Admin=new Admin()
constructor(private as:AdminService ,private router:Router)
{

}
submitdata(regForm:any){
  if(regForm.valid)
  {
  this.as.insert(this.a).subscribe((data:Admin)=>
  {
    if(data!=null)
    
      alert("Registration Successful")
    this.router.navigate(["/alog"])
  }
  )
}
else
alert("Plese Enter valid Data ")

}

}
