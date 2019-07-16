import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  msgForm = new FormGroup({
    'msgSubject': new FormControl(null),
    'msgTo': new FormControl(null, Validators.required),
    'CC': new FormControl(null),
    'BCC': new FormControl(null),
    'msgBody': new FormControl(null),
    'links': new FormControl(null)
  });

}
