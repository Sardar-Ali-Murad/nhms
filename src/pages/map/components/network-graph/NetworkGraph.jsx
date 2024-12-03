import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import RightDrawer from "../right-drawer/RightDrawer";

const NetworkGraph = ({ hosts }) => {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const nodes = hosts.slice(0, 50).map((host, index) => ({
      id: index + 1,
      label: host.name || `Node ${index + 1}`,
      color: "#4caf50",
    }));

    const edges = nodes
      .map((node, index) => ({
        from: Math.floor((index - 1) / 2) + 1,
        to: node.id,
      }))
      .slice(1);

    const options = {
      layout: {
        hierarchical: {
          direction: "UD",
          sortMethod: "hubsize",
          levelSeparation: 100,
          nodeSpacing: 100,
        },
      },
      nodes: {
        shape: "circle",
        size: 50,
        font: {
          size: 40,
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
      physics: false,
    };

    const network = new Network(
      containerRef.current,
      { nodes, edges },
      options
    );

    network.on("click", function (event) {
      const clickedNodes = event.nodes;
      if (clickedNodes.length > 0) {
        const nodeId = clickedNodes[0];
        setSelectedNode(hosts[nodeId - 1]);
        setOpen(true);
      }
    });

    return () => {
      network.destroy();
    };
  }, [hosts]);

  return (
    <div>
      <RightDrawer open={open} setOpen={setOpen} data={selectedNode} />
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "700px",
          border: "1px solid lightgray",
        }}
      ></div>
    </div>
  );
};

export default NetworkGraph;
