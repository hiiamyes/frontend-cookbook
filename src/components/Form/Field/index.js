import React, { useState } from "react";
import { getOr } from "lodash/fp";

const Field = (props) => {
  const { name, children, formik } = props;
  return (
    <div>
      {React.cloneElement(children, {
        name,
        error: getOr(undefined, name, formik.errors),
        value: getOr(undefined, name, formik.values),
        onChange: formik.handleChange,
      })}
    </div>
  );
};

export default Field;
