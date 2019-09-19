import React, { useState } from "react";
import Loader from "./index";

const LoaderDemo = () => {
  const [loading, setLoading] = useState(true);
  return <Loader loading={loading} />;
};

export default LoaderDemo;
