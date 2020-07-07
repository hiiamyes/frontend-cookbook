import { useState } from "react";

const useCollapse = () => {
  const [visible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible(!visible);
  };

  const closeCollapse = () => {
    setVisible(false);
  };

  return { visible, toggleCollapse, closeCollapse };
};

export default useCollapse;
