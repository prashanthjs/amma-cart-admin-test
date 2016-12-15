export class UserModel {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  password?: string;
  email: string;
  contactNumber: string;
  dob: string;
  userGroup: string;
  gender: string;
  isLocked?: boolean;
  isActive: boolean;
  address?: {
    addressLine1: string,
    addressLine2?: string,
    town: string,
    county: string,
    country: string,
    postcode: string
  };
  available: {
    store: {
      name: string,
      availableToChildren: boolean
    }
  };
  addon?: Object;
}
