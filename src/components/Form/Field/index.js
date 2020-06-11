import React, { useState } from "react";
import { Field } from "formik";
import { getOr } from "lodash/fp";

const Field2 = (props) => {
  const { name, label, input, children, formik } = props;
  // const [q, setQ] = useState(false);
  // const onChange = (e) => {
  //   if (!q) setQ(true);
  //   formik.handleChange(e);
  // };
  return (
    <div>
      <div>{label}</div>
      {React.cloneElement(children, {
        name,
        touched: getOr(undefined, name, formik.touched),
        // error: q ? getOr(undefined, name, formik.errors) : undefined,
        error:
          formik.submitCount > 0
            ? getOr(undefined, name, formik.errors)
            : undefined,
        value: getOr(undefined, name, formik.values),
        // onChange,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
      })}
    </div>
  );
  // return (
  //   <Field>
  //     {() => {
  //       return children;
  //     }}
  //   </Field>
  // );
};

export default Field2;
