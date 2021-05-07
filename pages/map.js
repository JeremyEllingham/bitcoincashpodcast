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
    { id: "Bitcoin Cash", size: nodeSizes.level1, color: colours.red },
    // Level 2 Node
    { id: "Engineering", size: nodeSizes.level2, color: colours.blue },
    { id: "Community Discussion", size: nodeSizes.level2, color: colours.blue },
  ],
  links: [
    // Level 1 to Level 2
    { source: "Bitcoin Cash", target: "Engineering" },
    { source: "Bitcoin Cash", target: "Community Discussion" },
    // Community Discussion
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
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
