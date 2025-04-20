import {PropertyStatus} from "./propertyStatus";

export type Property = {
  price: number;
  id: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  bedrooms: number;
  bathrooms: string;
  description: string;
  status: PropertyStatus;
};
