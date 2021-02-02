import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from '../testing class/auth-service';
import { TestBedComponent } from './test-bed.component';

describe('Testingn with angular test bed', () => {

  let component: TestBedComponent;
  let fixture: ComponentFixture<TestBedComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBedComponent],
      providers: [AuthService]
    });

    fixture = TestBed.createComponent(TestBedComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it('Should return true if user is authenticated',()=>{
    spyOn(authService,'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('Should return false if user authenticated',()=>{
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });


});