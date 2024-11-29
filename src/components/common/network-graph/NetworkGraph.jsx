import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";
import { changeOpen } from "../../../global-redux/reducers/common/slice";
import { useDispatch } from "react-redux";

const LinearHierarchyNetwork = () => {
  const dispatch = useDispatch();
  const containerRef = useRef(null); // Reference for the network container

  useEffect(() => {
    // Define the nodes with hierarchical structure
    const nodes = [
      { id: 1, label: "Parent Node", level: 0, color: "#ff5722" },
      { id: 2, label: "Child Node 1", level: 1, color: "#4caf50" },
      { id: 3, label: "Child Node 2", level: 1, color: "#2196f3" },
      { id: 4, label: "Sub-Child 1", level: 2, color: "#9c27b0" },
      { id: 5, label: "Sub-Child 2", level: 2, color: "#ff9800" },
      { id: 6, label: "Leaf Node 1", level: 3, color: "#00bcd4" },
      { id: 7, label: "Leaf Node 2", level: 3, color: "#e91e63" },
      { id: 8, label: "Sub-Child 3", level: 2, color: "#8bc34a" },
      { id: 9, label: "Leaf Node 3", level: 3, color: "#3f51b5" },
      { id: 10, label: "Leaf Node 4", level: 3, color: "#ffc107" },
    ];

    // Define the edges between nodes (updated to reflect new child relationships)
    const edges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 4, to: 6 },
      { from: 5, to: 7 },
      { from: 3, to: 8 },
      { from: 3, to: 9 },
      { from: 8, to: 10 },
    ];

    // Define the options for hierarchical layout
    const options = {
      layout: {
        hierarchical: {
          direction: "UD", // "UD" for top-down, "LR" for left-right
          sortMethod: "hubsize",
          levelSeparation: 150,
          nodeSpacing: 200,
        },
      },
      nodes: {
        shape: "circle", // Set node shape to circle
        size: 20,
        font: {
          size: 14,
        },
      },
      edges: {
        arrows: {
          to: { enabled: true },
        },
        smooth: {
          type: "cubicBezier",
          forceDirection: "vertical",
        },
      },
      physics: false, // Disable physics for a fixed hierarchical layout
    };

    // Create the network
    const network = new Network(
      containerRef.current,
      { nodes, edges },
      options
    );

    network.on("click", function (event) {
      const { nodes: clickedNodes } = event;

      // Check if a node was clicked
      if (clickedNodes.length > 0) {
        dispatch(changeOpen());
        // You can perform other actions here, such as updating state or opening a modal
      }
    });

    // Cleanup on component unmount
    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "600px", border: "1px solid lightgray" }}
    ></div>
  );
};

export default LinearHierarchyNetwork;
