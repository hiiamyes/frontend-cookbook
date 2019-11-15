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
  const result = [];
  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];
    const [lng, lat] = coordinate;
    const ele = await getEle({ lat, lng });
    if (i !== 0) {
      const [plng, plat] = coordinates[i - 1];
      distance += getDistance(
        { latitude: plat, longitude: plng },
        { latitude: lat, longitude: lng }
      );
    }
    result.push({ x: distance, y: ele });
  }
  fs.writeFileSync(
    path.resolve(__dirname, "./data.json"),
    JSON.stringify(result)
  );
})();
