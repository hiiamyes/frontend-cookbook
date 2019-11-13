const t = require("./trail.json");
const path = require("path");
const { getDistance } = require("geolib");
const { Hgt, TileSet } = require("node-hgt");

const tileset = new TileSet(path.resolve(__dirname, "hgt"));
// osm node 5579557352
// https://www.openstreetmap.org/node/5579557352
tileset.getElevation([24.3834039, 121.2317649], (err, ele) => {
  console.log(ele); // 3873m
});

const getEle = ({ lat, lng }) =>
  new Promise((resolve, reject) => {
    tileset.getElevation([lat, lng], (err, ele) => {
      resolve(ele);
    });
  });

(async () => {
  const { coordinates } = t;
  let d = 0;
  const result = [];
  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];
    const [lng, lat] = coordinate;
    const ele = await getEle({ lat, lng });
    if (i !== 0) {
      const [plng, plat] = coordinates[i - 1];
      d += getDistance(
        { latitude: plat, longitude: plng },
        { latitude: lat, longitude: lng }
      );
    }
    result.push([lng, lat, ele, d]);
  }
  console.log(result[result.length - 1]);
})();
