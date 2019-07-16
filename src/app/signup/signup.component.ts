import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signupForm = new FormGroup({
    'signupEmail': new FormControl(null, [Validators.required, Validators.email]),
    'signupPassword': new FormControl(null, Validators.required),
    'signupRePassword': new FormControl(null, [Validators.required]),
    'signupName': new FormControl(null, Validators.required)
  });

}
