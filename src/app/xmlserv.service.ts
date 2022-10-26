import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';  
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})


export class XmlservService {

  
   
  

  constructor(private http :HttpClient) { }

  sendRequest(): Observable<any>{
    
    let urlAPI = '/wsTarifa/wsTarifa.asmx';
    console.log("url: "+ urlAPI);
    const headers = new HttpHeaders({responseType: 'xml' , 'Content-Type': 'application/soap+xml; charset=utf-8' }).set('Accept', 'text/xml');
    let body =  `<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><listaMarcas xmlns="http://tempuri.org/WSQBC/QBCDE"><cUsuario>LINEA</cUsuario><cTarifa>LINEA</cTarifa></listaMarcas></soap12:Body></soap12:Envelope>`;
  

    return this.http.post<any>(urlAPI ,body , { headers: headers}); 
}
}
