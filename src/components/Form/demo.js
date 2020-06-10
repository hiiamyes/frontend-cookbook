import React, { useState } from "react";
import * as yup from "yup";
import Form from "src/components/Form/Form";
import Field from "src/components/Form/Field";
import BasicInput from "src/components/Input/BasicInput";
import Button from "src/components/Button";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const FormDemo = () => {
  const submit = (values) => {
    console.log(values);
    // alert(values);
  };
  return (
    <div>
      <Form
        initialValues={{
          firstName: "Yes",
          lastName: "Lee",
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        <Field name="firstName">
          <BasicInput />
        </Field>
        <Field name="lastName">
          <BasicInput />
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FormDemo;
