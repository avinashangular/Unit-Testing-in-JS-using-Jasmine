import { Component, OnInit } from '@angular/core';
import { AuthService } from '../testing class/auth-service';

@Component({
  selector: 'app-test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.css']
})
export class TestBedComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  needsLogin(){
    return !this.authService.isAuthenticated();
  }

}
