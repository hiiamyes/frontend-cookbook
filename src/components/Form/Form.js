import React from "react";
import { useFormik } from "formik";

const Form = (props) => {
  const { initialValues, onSubmit, children } = props;
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formik }),
      )}
    </form>
  );
};

export default Form;
