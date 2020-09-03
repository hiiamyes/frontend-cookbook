import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Form from "src/components/Form/Form";
import Field from "src/components/Form/Field";
import BasicInput from "src/components/Input/BasicInput";
import Button from "src/components/Buttons/Button";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const FormDemo = () => {
  const onSubmit = async (values) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit,
  });

  const formik2 = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <Form formik={formik}>
        <Field name="firstName" label="First Name">
          <BasicInput />
        </Field>
        <Field name="lastName" label="Last Name">
          <BasicInput />
        </Field>
        <Button type="submit" loading={formik.isSubmitting}>
          Submit
        </Button>
      </Form>
      <br></br>
      <Form formik={formik2}>
        <Field name="firstName">
          <BasicInput />
        </Field>
        <Field name="lastName">
          <BasicInput />
        </Field>
        <Button type="submit" loading={formik2.isSubmitting}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormDemo;
