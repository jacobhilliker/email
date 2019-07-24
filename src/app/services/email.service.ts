import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(private rest: RestService, private auth: AuthService){}

    getEmails() {
        return this.rest.get(environment.apiURL + '/emails?userId=' + this.auth.getUserId());
    }
}