import React from "react";
import Style from "./style";
import FormContext from "./FormContext";

const Form = props => {
  const { formik, children } = props;
  return (
    <FormContext.Provider value={{ formik }}>
      <Style onSubmit={formik.handleSubmit}>{children}</Style>
    </FormContext.Provider>
  );
};

export default Form;
