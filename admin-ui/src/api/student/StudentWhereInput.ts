import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringFilter;
};
