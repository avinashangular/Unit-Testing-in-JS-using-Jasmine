export class AuthService {
    isAuthenticated(): boolean {
        return !!sessionStorage.getItem('token');
    }
}
