import { TestWithFakeClasses } from './test-with-fake-classes';

class MockAuthService {
  authenticated = false;

  isAuthenticated(){
    return this.authenticated;
  }
}

describe('Testing With Fake Classes', () => {
 
  let authService: MockAuthService;
  let component: TestWithFakeClasses;

  beforeEach(()=>{
    authService = new MockAuthService();
    component = new TestWithFakeClasses(authService);
  });

  afterEach(()=>{
    authService = null;
    component = null;
  });

  it('Should return true if user not authenticated',()=>{
    expect(component.needsLogin()).toBeTruthy();
  });

  it('Should return false if user is authenticated',()=>{
    authService.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  })

});
