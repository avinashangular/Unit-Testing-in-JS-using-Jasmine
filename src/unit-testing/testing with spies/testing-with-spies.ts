import { AuthService } from "../testing class/auth-service";

export class TestingWithSpies {
    constructor(
        private authService: AuthService
    ){}

    needsLogin(){
        return !this.authService.isAuthenticated();
    }
}
