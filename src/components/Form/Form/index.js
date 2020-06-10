import React from "react";
import { useFormik } from "formik";
import Style from "./style";

const Form = (props) => {
  const { initialValues,validationSchema, onSubmit, children } = props;
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

export default Form;
