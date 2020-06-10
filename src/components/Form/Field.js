import React, { useState } from "react";
import { useField, Form, FormikProps, Formik } from "formik";

const Field = (props) => {
  const { name, children, formik } = props;
  console.log(formik);
  const q = useField("firstName");
  console.log(q);
  // const { values } = formik;
  return <div>{React.cloneElement(children, {})}</div>;
};

export default Field;
