import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userId: number = null;

    private userIdKey: string = 'userId';

    getUserId(): number {
        if (localStorage.getItem(this.userIdKey)) {
            this.setUserId(+localStorage.getItem(this.userIdKey)); // The plus is "0 + var", changing it to a number
        }
        return this.userId;
    }

    setUserId(userId: number): void {
        localStorage.setItem(this.userIdKey, userId.toString());
        this.userId = userId;
    }

    logout(): void {
        this.userId = null;
        localStorage.removeItem(this.userIdKey);
    }
}