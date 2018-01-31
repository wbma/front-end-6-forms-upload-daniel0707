import { Component, OnInit } from '@angular/core';
import {MediaServiceService} from '../media-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public mediaService: MediaServiceService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.mediaService.getUserData().subscribe(response => {
        console.log('Welcome' + response['full_name']);
        this.router.navigate(['login']);
      });
    }
  }
}
