import { AuthService } from './auth-service';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(()=>{
    service = new AuthService();
  });

  afterEach(()=>{
    service = null;
    sessionStorage.removeItem('token');
  })

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  it('should return true, If user is authenticated',()=>{
    sessionStorage.setItem('token','1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false, if user not authenticated',()=>{
    expect(service.isAuthenticated()).toBeFalsy();
  })
});
