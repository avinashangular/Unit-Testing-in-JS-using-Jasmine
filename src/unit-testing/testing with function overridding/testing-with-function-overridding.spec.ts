import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';
import { AuthService } from '../testing class/auth-service';
import { TestingWithFunctionOverridding } from './testing-with-function-overridding';

class MockAuthService extends AuthService {
  authenticate: boolean = false;
  isAuthenticated(): boolean {
    return this.authenticate;
  }
}

describe('Testing With Function Overridding', () => {
  let authService: MockAuthService;
  let component: TestingWithFunctionOverridding;

  beforeEach(()=>{
    authService = new MockAuthService();
    component = new TestingWithFunctionOverridding(authService);
  });

  afterEach(()=>{
    authService = null;
    component = null;
  });

  it('Should return true if user not authenticated',()=>{
    expect(component.needsLogin()).toBeTruthy();
  });

  it('Should return false if user authenticated',()=>{
    authService.authenticate = true;
    expect(component.needsLogin()).toBeFalsy();
  });

});
