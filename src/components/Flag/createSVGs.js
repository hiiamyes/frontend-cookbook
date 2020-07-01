// cp -r ../../../node_modules/svg-country-flags/svg/ ./svg

const fs = require("fs");
const path = require("path");
const worldCountries = require("world-countries");

const flags = fs.readdirSync(path.resolve(__dirname, "svg"));

if (!fs.existsSync(path.resolve(__dirname, "cca3"))) {
  fs.mkdirSync(path.resolve(__dirname, "cca3"));
}
const strings = [];
const strings2 = ["const flags = {"];
for (const flag of flags) {
  const country = worldCountries.find(
    ({ cca2 }) => cca2 === flag.split(".")[0].toUpperCase(),
  );
  if (country) {
    const { cca3 } = country;
    fs.copyFileSync(
      path.resolve(__dirname, "svg", flag),
      path.resolve(__dirname, "cca3", `${cca3}.svg`),
    );
    strings.push(`import ${cca3} from "./cca3/${cca3}.svg";`);
    strings2.push(`${cca3},`);
  }
}
strings2.push("};");
strings2.push("export default flags;");
fs.writeFileSync(
  path.resolve(__dirname, "flags2.js"),
  `${strings.join("\n")}${strings2.join("\n")}`,
);
