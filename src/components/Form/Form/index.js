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
  return (
    <Style onSubmit={formik.handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formik }),
      )}
    </Style>
  );
};

export default Form2;
