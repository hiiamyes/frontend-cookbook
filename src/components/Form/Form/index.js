import React from "react";
import Style from "./style";

const Form2 = (props) => {
  const { formik, children } = props;
  return (
    <Style onSubmit={formik.handleSubmit}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { formik }),
      )}
    </Style>
  );
};

export default Form2;
