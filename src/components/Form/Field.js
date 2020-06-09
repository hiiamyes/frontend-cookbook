import React, { useState } from "react";
import { getOr, compose, cloneDeep, set, has } from "lodash/fp";

function FormHOC() {
  return function(WrappedComponent) {
    return function(props) {
      const [data, _setData] = useState(null);
      // constructor(props) {
      //   super(props);
      //   this.state = {
      //     modalVisible: false,
      //     loading: false,
      //     data: {},
      //   };
      //   this.openModal = this.openModal.bind(this);
      //   this.closeModal = this.closeModal.bind(this);
      //   this.startLoading = this.startLoading.bind(this);
      //   this.stopLoading = this.stopLoading.bind(this);
      // }

      // openModal(data) {
      //   this.setState({ data, modalVisible: true });
      // }

      // closeModal() {
      //   this.setState({ modalVisible: false });
      //   this.stopLoading();
      // }

      // startLoading() {
      //   this.setState({ loading: true });
      // }

      // stopLoading() {
      //   this.setState({ loading: false });
      // }

      // onChange = (key, value) => {
      //   const newData = compose(
      //     set(key, value),
      //     cloneDeep,
      //   )(this.state.data);
      //   this.setState({ data: newData });
      // };

      // _setData = data => {
      //   this.setState({ data });
      // };

      /**
       * createFormItem({key:'data.source', required: true})(<Input />)
       */
      const createFormItem = ({ key, initialValue, required }) => FormItem => {
        if (!has(key, data)) {
          const newData = compose(
            set(key, initialValue),
            cloneDeep,
          )(data);
          _setData(newData);
        }
        if (FormItem !== undefined) {
          return React.cloneElement(FormItem, {
            value: getOr(null, key, data),
            onChange: e => {
              let value;
              if (!e || !e.target) {
                value = e;
              } else {
                value =
                  e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value;
              }
              const newData = compose(
                set(key, value),
                cloneDeep,
              )(data);
              _setData(newData);
            },
          });
        }
      };
      const getData = () => {
        return data;
      };
      const setData = newData => {
        _setData(newData);
      };
      const validate = () => {};

      return (
        <WrappedComponent
          form={{
            createFormItem,
            validate,
            getData,
            setData,
          }}
          {...props}
        />
      );
    };
  };
}

export default FormHOC;
