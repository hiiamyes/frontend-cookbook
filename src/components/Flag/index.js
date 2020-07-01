import React from "react";
// import worldCountries from "world-countries";
import Style from "./style";
// import flags from "./flags";
import flags2 from "./flags2";

const Flag = (props) => {
  const { countryCodeCCA3 } = props;
  // const flag = worldCountries.find(({ cca3 }) => cca3 === countryCodeCCA3).flag;
  // return <Style>{flag}</Style>;
  // const cca2 = worldCountries.find(({ cca3 }) => cca3 === countryCodeCCA3).cca2;
  return (
    <Style>
      {/* <img src={flags[cca2]}></img> */}
      <img src={flags2[countryCodeCCA3]}></img>
    </Style>
  );
};

export default Flag;
