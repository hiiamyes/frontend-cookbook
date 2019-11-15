const axios = require("axios");
const querystring = require("querystring");

/**
 const ways = [
    {
      id: 464085687,
      start:
      end:
      reverse: false
    },
    {
      id: 464085679,
    },
  ];
*/

module.exports = async ways => {
  let result = [];
  for (let i = 0; i < ways.length; i += 1) {
    const way = ways[i];
    const { id, start, end, reverse } = way;
    const query = `
      [out:json];
        way(${way.id});
        (._;>;);
      out;
    `;
    const {
      data: { elements }
    } = await axios.post(
      "https://overpass-api.de/api/interpreter",
      querystring.stringify({ data: query })
    );

    let nodeIds = elements.pop().nodes;
    if (reverse) nodeIds = nodeIds.reverse();
    const startIndex = start
      ? nodeIds.findIndex(nodeId => nodeId === start)
      : 0;
    const endIndex = end
      ? nodeIds.findIndex(nodeId => nodeId === end)
      : nodeIds.length - 1;
    result = result.concat(
      nodeIds.slice(startIndex, endIndex + 1).map(nodeId => {
        const node = elements.find(e => e.id === nodeId);
        return [node.lon, node.lat];
      })
    );
  }

  return {
    type: "LineString",
    coordinates: result
  };
};
