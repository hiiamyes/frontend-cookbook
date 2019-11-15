const fs = require("fs");
const path = require("path");
const { TileSet } = require("node-hgt");
const { getDistance } = require("geolib");
const osmWaysToGeoJSON = require("./osmWaysToGeoJSON");
const ways = require("./ways.json");

const tileset = new TileSet(path.resolve(__dirname, "hgt"));
// osm node 5579557352
// https://www.openstreetmap.org/node/5579557352
// tileset.getElevation([24.3834039, 121.2317649], (err, ele) => {
//   console.log(ele); // 3873m
// });

const getEle = ({ lat, lng }) =>
  new Promise((resolve, reject) => {
    tileset.getElevation([lat, lng], (err, ele) => {
      resolve(ele);
    });
  });

(async () => {
  // Create trail from ways
  const trail = await osmWaysToGeoJSON(ways);
  fs.writeFileSync(
    path.resolve(__dirname, "./trail.json"),
    JSON.stringify(trail)
  );

  // Create data from trail
  const { coordinates } = trail;
  let distance = 0;
  const data = [];
  for (let i = 0; i < coordinates.length; i++) {
    const [lng, lat] = coordinates[i];
    const ele = await getEle({ lat, lng });
    if (i !== 0) {
      const [prelng, prelat] = coordinates[i - 1];
      distance += getDistance(
        { latitude: prelat, longitude: prelng },
        { latitude: lat, longitude: lng }
      );
    }
    data.push({ x: distance, y: ele });
  }
  fs.writeFileSync(
    path.resolve(__dirname, "./data.json"),
    JSON.stringify(data)
  );
})();
