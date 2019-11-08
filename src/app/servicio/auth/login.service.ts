import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Usuario  {
  nombre: string
  clave : string
}


@Injectable({
  providedIn: 'root'
})



export class LoginService {


  constructor(protected httpdClient: HttpClient, private router: Router) { }

  Validar(usuario: Usuario): any{
    return this.httpdClient.post<any>("https://10.11.61.122:2608/iaim/api/wusuario/login", usuario)
  }
}
