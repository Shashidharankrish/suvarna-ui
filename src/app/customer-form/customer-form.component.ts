import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const newCustomer: Customer = this.customerForm.value;
      this.customerService.addCustomer(newCustomer).subscribe(
        (response) => {
          console.log('Customer added successfully:', response);
          // Optionally, you can redirect or show a success message here
        },
        (error) => {
          console.error('Error adding customer:', error);
          // Handle error, show an error message, etc.
        }
      );
    }
  }
}
