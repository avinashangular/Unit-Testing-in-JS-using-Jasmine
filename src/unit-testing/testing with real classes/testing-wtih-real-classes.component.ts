import { Component, OnInit } from '@angular/core';
import { AuthService } from '../testing class/auth-service';

@Component({
  selector: 'app-testing-wtih-real-classes',
  templateUrl: './testing-wtih-real-classes.component.html',
  styleUrls: ['./testing-wtih-real-classes.component.css']
})
export class TestingWithRealClassesComponent implements OnInit {

  constructor(
    private service: AuthService
  ) { }

  ngOnInit(): void {
  
  }

  needsLogin(){
    return !this.service.isAuthenticated();
  }

}