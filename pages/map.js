import React from "react";
import { Graph } from "react-d3-graph";

// docs
// https://danielcaldas.github.io/react-d3-graph/docs/

const nodeSizes = {
  level1: 5000,
  level2: 2200,
  level3: 1000,
  level4: 700,
};

const fontSizes = {
  level1: 36,
  level2: 30,
  level3: 24,
  level4: 18,
};

const colours = {
  red: "red",
  green: "green",
  blue: "blue",
};

// graph payload (with minimalist structure)
const data = {
  nodes: [
    // Level 1 Node
    {
      id: "Bitcoin Cash",
      size: nodeSizes.level1,
      color: colours.red,
      fontSize: fontSizes.level1,
      x: 700,
      y: 400,
    },
    // Level 2 Node
    {
      id: "Engineering",
      size: nodeSizes.level2,
      color: colours.blue,
      fontSize: fontSizes.level2,
      x: 700,
      y: 550,
    },
    {
      id: "Community Discussion",
      size: nodeSizes.level2,
      color: colours.blue,
      fontSize: fontSizes.level2,
      x: 700,
      y: 250,
    },
    // Community Discussion
    {
      id: "Reddit /r/btc",
      url: "https://www.reddit.com/r/btc",
      size: nodeSizes.level3,
      color: colours.green,
      fontSize: fontSizes.level3,
      x: 600,
      y: 150,
    },
    {
      id: "Reddit /r/BitcoinCash",
      url: "https://www.reddit.com/r/BitcoinCash",
      size: nodeSizes.level3,
      color: colours.green,
      fontSize: fontSizes.level3,
      x: 800,
      y: 150,
    },
  ],
  links: [
    // Level 1 to Level 2
    { source: "Bitcoin Cash", target: "Engineering" },
    { source: "Bitcoin Cash", target: "Community Discussion" },
    // Community Discussion
    { source: "Community Discussion", target: "Reddit /r/btc" },
    { source: "Community Discussion", target: "Reddit /r/BitcoinCash" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  staticGraph: true,
  directed: true,
  height: 1600,
  width: 1600,
  highlightDegree: 0,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const Map = () => {
  const onClickNode = function (nodeId) {
    console.log(`Clicked node ${nodeId}`);
    const url = data?.nodes?.filter((n) => n?.id === nodeId)?.[0]?.url;

    if (url) {
      window.open(url, "_blank");
    }
  };

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <div>
      <h1>Bitcoin Cash Community Map</h1>
      <h2>Notice something missing? Want to contribute?</h2>
      <p>
        Pull requests welcome:
        https://github.com/JeremyEllingham/bitcoincashpodcast
      </p>
      <ul>
        <li>Click green circles to open the relevant page</li>
      </ul>
      <Graph
        style={{ border: "1px black solid" }}
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </div>
  );
};

export default Map;
