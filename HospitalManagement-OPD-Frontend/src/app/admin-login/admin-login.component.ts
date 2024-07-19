import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
a:Admin=new Admin ()
constructor(private as:AdminService, private router:Router)
{

}
submitdata()
{
  this.as.login(this.a.email,this.a.password).subscribe((data:Admin)=>
  {
    if(data!=null)
      {
        alert("login Successful")
        localStorage.setItem("aemail",data.email)
        this.router.navigate(["/"])
      }
      else
      alert("Invalid emailid or Password" )
  }
  )
}
}
