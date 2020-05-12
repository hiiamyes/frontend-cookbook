import React, { useState } from "react";
import Loader from "./index";
import CssLoader from "./CssLoader";

const LoaderDemo = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Loader loading={loading} />
      <CssLoader loading={loading} />
    </div>
  );
};

export default LoaderDemo;
