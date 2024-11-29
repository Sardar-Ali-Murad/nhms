import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { closeOpen } from "../../../global-redux/reducers/common/slice";

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state?.common);
  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation" className="p-3">
      <div className="mb-2">
        <h5>Satellite Info</h5>
        <Divider />
      </div>
      <div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Device Name :</h4>
          <p>no Name</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>IP Address :</h4>
          <p>10.45.23.124</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Alerts :</h4>
          <p>34 / 67</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Warning :</h4>
          <p>1 / 98</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>IntraVUE :</h4>
          <p>https://12.23.12.234</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Supervisor :</h4>
          <p>Asset List</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Recent Uptime :</h4>
          <p>83.34 %</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Last Update :</h4>
          <p>2 minutes ago</p>
        </div>
      </div>
      <Divider />

      <div className="mb-2">
        <h5>Uptime Threshold Settings</h5>
        <Divider />
      </div>
      <div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Yellow Threshold :</h4>
          <p>34 %</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Orange Threshold :</h4>
          <p>92 %</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Red Threshold :</h4>
          <p>62 %</p>
        </div>
        <div className="flex items-center gap-2 drawer-flex">
          <h4>Blue Threshold :</h4>
          <p>12 %</p>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} anchor="right" onClick={() => dispatch(closeOpen())}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
