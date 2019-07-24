import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestService{
    constructor(private http: HttpClient) {}

    // Using a Promise because .get() returns an Observable and we don't want to subscribe to it
    get(url: string): Promise<any> {
        return this.http.get(url, {
            headers: this.buildOptions()
        })
        .toPromise()
        .catch((err) => {
            console.error(err);
        })
    }

    buildOptions(): HttpHeaders {
        return new HttpHeaders({
            Accept: 'application/json'
        });
    }
}