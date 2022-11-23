export type StudentCreateInput = {
  countryInterested?: Array<"Uk" | "Usa" | "Canada" | "Australia">;
  email: string;
  name: string;
  phone: string;
};
