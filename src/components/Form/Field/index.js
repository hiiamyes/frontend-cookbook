import React, { useState } from "react";
import { Field } from "formik";
import { getOr } from "lodash/fp";
import Style from "./style";

const Field2 = (props) => {
  const { name, label, input, children, formik } = props;
  const error =
    formik.submitCount > 0 ? getOr(undefined, name, formik.errors) : undefined;
  return (
    <Style>
      <div className="label">{label}</div>
      {React.cloneElement(children, {
        name,
        touched: getOr(undefined, name, formik.touched),
        error,
        value: getOr(undefined, name, formik.values),
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      })}
      <div className="error">{error}</div>
    </Style>
  );
};

export default Field2;
