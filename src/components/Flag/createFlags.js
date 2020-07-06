const fs = require("fs");
const path = require("path");
const worldCountries = require("world-countries");
const PATH_SVG_COUNTRY_FLAGS = "../../../node_modules/svg-country-flags";
const extras = ["EU"];
const importStrings = [];
const objectStrings = [`const flags = {`];
const svgFlags = fs.readdirSync(
  path.resolve(__dirname, PATH_SVG_COUNTRY_FLAGS, "svg"),
);
if (!fs.existsSync(path.resolve(__dirname, "icons"))) {
  fs.mkdirSync(path.resolve(__dirname, "icons"));
}
for (const country of worldCountries) {
  const { cca2, cca3 } = country;
  const svgFlag = svgFlags.find(
    flag => flag.split(".")[0].toUpperCase() === cca2,
  );
  if (svgFlag) {
    fs.copyFileSync(
      path.resolve(__dirname, PATH_SVG_COUNTRY_FLAGS, "svg", svgFlag),
      path.resolve(__dirname, "icons", `${cca3}.svg`),
    );
    importStrings.push(`import ${cca3} from "./icons/${cca3}.svg";`);
    objectStrings.push(`  ${cca3},`);
  }
}
for (const extra of extras) {
  fs.copyFileSync(
    path.resolve(
      __dirname,
      PATH_SVG_COUNTRY_FLAGS,
      "svg",
      `${extra.toLowerCase()}.svg`,
    ),
    path.resolve(__dirname, "icons", `${extra}.svg`),
  );
  importStrings.push(`import ${extra} from "./icons/${extra}.svg";`);
  objectStrings.push(`  ${extra},`);
}
objectStrings.push("};");
objectStrings.push("export default flags;");
fs.writeFileSync(
  path.resolve(__dirname, "flags.js"),
  `${importStrings.join("\n")}\n${objectStrings.join("\n")}\n`,
);
