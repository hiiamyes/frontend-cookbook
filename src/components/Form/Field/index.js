import React, { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { get } from "lodash-es";
import Error from "src/components/Form/Error";
import Space from "src/components/Space";
import Style from "./style";
import FormContext from "src/components/Form/Form/FormContext";

const Field = (props) => {
  const { name, label, input } = props;
  const {
    formik: {
      values,
      errors,
      submitCount,
      setFieldValue,
      handleChange,
      handleBlur,
    },
  } = useContext(FormContext);
  const error = submitCount > 0 ? get(errors, name, undefined) : undefined;
  const checked = get(values, name, undefined);
  const value = get(values, name, undefined);

  const onChange = useCallback(
    input.props.onChange
      ? input.props.onChange
      : (e) => {
          if (e.type === "select") {
            setFieldValue(name, e.detail.value);
          } else {
            handleChange(e);
          }
        },
    [setFieldValue, handleChange, name],
  );

  return (
    <Style>
      {label && (
        <>
          <div className="label">{label}</div>
          <Space height={5} unit="px" />
        </>
      )}
      {React.cloneElement(input, {
        name,
        // To get rid of Formik handleBlur warning, add id for those
        // non-native components, like dropdown.
        id: name,
        error: !!error,
        checked,
        value,
        onChange,
        onBlur: handleBlur,
      })}
      <Space height={5} unit="px" />
      <Error>{error}</Error>
    </Style>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  input: PropTypes.element.isRequired,
};

export default Field;
