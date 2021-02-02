import { AuthService } from "../testing class/auth-service";

export class TestWithFakeClasses {
    constructor(
        private authService: AuthService
    ){}

    needsLogin(){
        return !this.authService.isAuthenticated();
    }
}
