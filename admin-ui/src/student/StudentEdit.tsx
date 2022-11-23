import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Country Interested"
          source="countryInterested"
          choices={[
            { label: "UK", value: "Uk" },
            { label: "USA", value: "Usa" },
            { label: "Canada", value: "Canada" },
            { label: "Australia", value: "Australia" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
