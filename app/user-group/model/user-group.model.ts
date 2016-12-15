export class UserGroupModel {
  _id: string;
  title: string;
  email: string;
  contactNumber: string;
  website: string;
  parent: string;
  description: string;
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
  addon?: Object;
}
