import React from "react";
import Style from "./style";
import worldCountries from "world-countries";

const Flag = (props) => {
  const { countryCodeCCA3 } = props;
  const flag = worldCountries.find(({ cca3 }) => cca3 === countryCodeCCA3).flag;
  return <Style>{flag}</Style>;
};

export default Flag;
