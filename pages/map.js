import React from "react";
import { Graph } from "react-d3-graph";

// docs
// https://danielcaldas.github.io/react-d3-graph/docs/

const nodeSizes = {
  level1: 1000,
  level2: 750,
  level3: 500,
  level4: 300,
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
      x: 400,
      y: 200,
    },
    // Level 2 Node
    {
      id: "Engineering",
      size: nodeSizes.level2,
      color: colours.blue,
      x: 400,
      y: 250,
    },
    {
      id: "Community Discussion",
      size: nodeSizes.level2,
      color: colours.blue,
      x: 400,
      y: 150,
    },
    // Community Discussion
    {
      id: "Reddit /r/btc",
      size: nodeSizes.level3,
      color: colours.green,
      x: 350,
      y: 100,
    },
    {
      id: "Reddit /r/BitcoinCash",
      size: nodeSizes.level3,
      color: colours.green,
      x: 450,
      y: 100,
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
    window.alert(`Clicked node ${nodeId}`);
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
      <Graph
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
