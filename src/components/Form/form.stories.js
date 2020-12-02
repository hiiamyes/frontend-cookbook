import React from "react";
import { useFormik } from "formik";
import Space from "src/components/Space";
import Form from "src/components/Form";
import Button from "src/components/Buttons/Button";
import BasicInput from "src/components/Input/BasicInput";
import BasicSelect from "src/components/Select/BasicSelect";
import validationSchema from "./validationSchema";

export default {
  title: "Form",
};

const STATUS = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

export const Default = () => {
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    const { setStatus, setErrors } = actions;
    try {
      setStatus(STATUS.PENDING);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus(STATUS.SUCCESS);
    } catch (error) {
      setErrors({ email: " ", password: " " });
      setStatus(STATUS.FAIL);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      hut: undefined,
    },
    validationSchema,
    onSubmit,
  });

  const { isSubmitting, status } = formik;

  return (
    <div style={{ width: "640px" }}>
      <Form formik={formik}>
        <Form.Field
          name="email"
          label="Email"
          input={<BasicInput autoFocus />}
        />
        <Space height={5} unit="px" />
        <Form.Field
          name="password"
          label="Password"
          input={<BasicInput type="password" />}
        />
        <Space height={5} unit="px" />
        <Form.Field
          name="hut"
          label="Hut"
          input={
            <BasicSelect
              options={[
                { value: 13, label: "九九山莊" },
                { value: 223, label: "三六九山莊" },
              ]}
            />
          }
        />
        <Space height={5} unit="px" />
        <Button htmlType="submit" loading={isSubmitting}>
          Submit
        </Button>
        {status === STATUS.FAIL && !isSubmitting && (
          <>
            <Space height={5} unit="px" />
            <Form.Error>
              Incorrect Email or password. Re-enter and try again.
            </Form.Error>
          </>
        )}
      </Form>
    </div>
  );
};
