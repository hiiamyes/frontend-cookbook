import React from "react";
import { useFormik, Formik, Form } from "formik";
import Style from "./style";

const Form2 = (props) => {
  const { initialValues, validationSchema, onSubmit, children } = props;
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(formik.submitCount);
  console.log(formik.errors);
  return (
    <Style onSubmit={formik.handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formik }),
      )}
    </Style>
  );
  // return (
  //   <Formik>
  //     {(form) => {
  //       return <Form>{children}</Form>;
  //     }}
  //   </Formik>
  // );
};

export default Form2;
