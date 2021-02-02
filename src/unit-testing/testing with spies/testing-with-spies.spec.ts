import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { AuthService } from '../testing class/auth-service';
import { TestingWithSpies } from './testing-with-spies';

describe('Testing With Spies', () => {
 let authService: AuthService;
 let component: TestingWithSpies;
 let spy:any;

 beforeEach(()=>{
  authService = new AuthService();
  component = new TestingWithSpies(authService);
 });

 afterEach(()=>{
  authService = null;
  component = null;
 });

 it('Should return true if user is not auhtenticated',()=>{
  spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
  expect(component.needsLogin()).toBeTruthy();
  expect(authService.isAuthenticated).toHaveBeenCalled();
 });

 it('Should return false if user is authenticated',()=>{
  spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
  expect(component.needsLogin()).toBeFalsy();
  expect(authService.isAuthenticated).toHaveBeenCalled();
 });

});
