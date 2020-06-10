import React, { useState } from "react";
import Form from "src/components/Form/Form";
import Field from "src/components/Form/Field";
import BasicInput from "src/components/Input/BasicInput";
import Button from "src/components/Button";

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
        onSubmit={submit}
      >
        <Field>
          <BasicInput />
        </Field>
        <Field>
          <BasicInput />
        </Field>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default FormDemo;
