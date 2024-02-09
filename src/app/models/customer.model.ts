// customer.model.ts
export interface Customer {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  aadharNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
}
