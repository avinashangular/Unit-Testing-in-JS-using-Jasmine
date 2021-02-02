import { AuthService } from "../testing class/auth-service";

export class TestingWithFunctionOverridding {
    constructor(
        private authService: AuthService
    ){}

    needsLogin():boolean {
        return !this.authService.isAuthenticated();
    }

}
