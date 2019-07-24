import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rest: RestService, private auth: AuthService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    'loginEmail': new FormControl(null, [Validators.required, Validators.email]),
    'loginPassword': new FormControl(null, Validators.required)
  });

  handleLoginClick() {
    const form = this.loginForm.value;
    return this.rest.get(environment.apiURL + '/users?email=' + form.loginEmail + '&password=' + form.loginPassword)
    .then(res => {
      const userId = res[0].id;
      this.auth.setUserId(userId);
    });
    
  }

}
