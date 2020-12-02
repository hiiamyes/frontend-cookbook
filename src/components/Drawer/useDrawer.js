import { useState } from "react";

const useDrawer = () => {
  const [visible, setVisible] = useState(false);

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return { visible, openDrawer, closeDrawer };
};

export default useDrawer;
