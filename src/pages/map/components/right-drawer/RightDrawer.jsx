import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function RightDrawer({ open, setOpen, data }) {
  const DrawerList = (
    <Box
      sx={{
        width: 320,
        position: "fixed",
        zIndex: "1000",
        background: "white",
        height: "100vh",
        borderLeft: "1px solid lightGrey",
        bottom: "0px",
        top: "0px",
      }}
      role="presentation"
      className={`p-3 ${open && "open-righ-drawer"} righ-drawer`}
    >
      <div
        className="mb-2 d-flex space-between"
        style={{ justifyContent: "space-between" }}
      >
        <h5>Node Info</h5>
        <i
          className="fa fa-close text-danger f-30 cursor-pointer"
          onClick={() => setOpen(false)}
        ></i>
      </div>
      <Divider />
      <div className="mt-2">
        {data ? (
          <>
            {Object.entries(data).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2 drawer-flex">
                <h4>{`${key.charAt(0).toUpperCase()}${key.slice(1)}:`}</h4>
                <p>{value?.toString() || "N/A"}</p>
              </div>
            ))}
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Divider />
    </Box>
  );

  return <div>{DrawerList}</div>;
}
