import { Component, OnInit } from '@angular/core';
import {MediaServiceService} from '../media-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public mediaService: MediaServiceService) { }

  ngOnInit() {
  }

}
