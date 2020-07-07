import React, { useState } from "react";
import worldCountries from "world-countries";
import Flag from "src/components/Flag";

const FlagDemo = () => {
  return (
    <div>
      {worldCountries.map((country) => {
        return (
          <div
            style={{
              display: "grid",
              grid: "1fr / max-content max-content",
              gridGap: "10px",
            }}
          >
            <Flag countryCodeCCA3={country.cca3}></Flag>
            <span>{country.name.common}</span>
            <span>{country.cca3}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FlagDemo;
