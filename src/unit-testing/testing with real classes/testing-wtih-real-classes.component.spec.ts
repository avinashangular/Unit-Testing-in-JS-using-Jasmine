import { AuthService } from '../testing class/auth-service';
import { TestingWithRealClassesComponent } from './testing-wtih-real-classes.component';

describe('Testing with Real Classes',()=>{
  let authService:AuthService;
  let component: TestingWithRealClassesComponent;

  beforeEach(()=>{
    authService = new AuthService();
    component = new TestingWithRealClassesComponent(authService);
  });

  afterEach(()=>{
    sessionStorage.removeItem('token');
    authService = null;
    component = null;
  });

  it('Should return true if user is not Athenticated.',()=>{
    expect(component.needsLogin()).toBeTruthy();
  });

  it('Should return false if user is Authenticated.',()=>{
    sessionStorage.setItem('token','1234');
    expect(component.needsLogin()).toBeFalsy();
  });
  
})