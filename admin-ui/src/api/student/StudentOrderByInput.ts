import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  countryInterested?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
