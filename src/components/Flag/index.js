import React from "react";
import currencies from "./currencies";
import flags from "./flags";
import Style from "./style";

const Flag = props => {
  let { cca3, currency, width = 21, height = 14 } = props;
  if (!cca3 && currency) cca3 = currencies[currency];
  return (
    <Style src={flags[cca3]} alt={cca3} width={width} height={height}></Style>
  );
};

export default Flag;
