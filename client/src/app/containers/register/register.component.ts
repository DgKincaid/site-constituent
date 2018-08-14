import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      confirmPassword: [''],
      firstName: [''],
      lastName: [''],
      userName: [''],
      address: this.fb.group({
        city: [''],
        state: ['']
      })
    });
  }

  public onSubmit(): void {
    console.log(this.registerForm);

    this.auth.register(this.registerForm.value).subscribe((data) => {
      console.log(data);

      this.router.navigateByUrl('/');
    });
  }
}
