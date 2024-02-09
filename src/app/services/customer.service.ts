import { Injectable, inject } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  private http = inject(HttpClient)
  apiUrl = environment.API_URL

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }
}
