import React from "react";
import worldCountries from "world-countries";
import Flag from "src/components/Flag";
import currencies from "src/components/Flag/currencies";

export default {
  title: "UI-kit | Flag",
  component: Flag,
};

const AllCountryFlags = () => {
  return (
    <div
      style={{
        display: "grid",
        grid: "1fr / repeat(auto-fill, 200px)",
        gridAutoFlow: "row",
        gridGap: "20px",
        alignItems: "center",
      }}
    >
      {[{ cca3: "EU", name: { common: "Europe" } }, ...worldCountries].map(
        (country) => {
          return (
            <div
              style={{
                display: "grid",
                grid: "1fr / max-content 35px 1fr",
                alignItems: "center",
                gridGap: "10px",
              }}
            >
              <Flag cca3={country.cca3}></Flag>
              <div>{country.cca3}</div>
              <div>{country.name.common}</div>
            </div>
          );
        },
      )}
    </div>
  );
};

const AllCurrencyFlags = () => {
  return (
    <div
      style={{
        display: "grid",
        grid: "1fr / repeat(auto-fill, 200px)",
        gridAutoFlow: "row",
        gridGap: "20px",
        alignItems: "center",
      }}
    >
      {Object.keys(currencies).map((currency) => {
        return (
          <div
            style={{
              display: "grid",
              grid: "1fr / max-content 1fr",
              alignItems: "center",
              gridGap: "10px",
            }}
          >
            <Flag currency={currency}></Flag>
            <div>{currency}</div>
          </div>
        );
      })}
    </div>
  );
};

const DifferentSizeFlags = () => {
  return (
    <div>
      <div>Default, Width = 21px, Height = 14px</div>
      <Flag cca3={"EU"}></Flag>
      <div>Custom, Width = 56px, Height = 56px</div>
      <Flag cca3={"EU"} width={56} height={56}></Flag>
    </div>
  );
};

export { AllCountryFlags, AllCurrencyFlags, DifferentSizeFlags };
