import { IuserSignin } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public endpoint: string = "http://localhost:3000/users";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: Iuser | Object = {}; //Aquí almacenaremos la respuesta del signin (_id + token + expiresIn)


  constructor( private http: HttpClient, public router: Router ) {/* Empty */ }

  //Registro
  public signUp(user:Iuser) {
    const api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError))
  }
  //Login/inicio sesión
  public signIn (user: IuserSignin){
    return this.http.post(`${this.endpoint}/login`, user)
    .subscribe( (res:any) => {
      localStorage.setItem('access_token', res.token);
      this.currentUser = res;
    })
    
  }
  //Obtener token
  public getToken() {
    return localStorage.getItem('access_token')
  }

  //Usuario está logueado?
  public isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  //Logout / cierre de sesión
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['home']);
    }
  }

  //Manejador de errores
  public handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}


