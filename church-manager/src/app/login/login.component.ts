import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showPassword = false;

  public formLogin: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createFormLogin();
  }

  private createFormLogin() {
    this.formLogin = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }
}
