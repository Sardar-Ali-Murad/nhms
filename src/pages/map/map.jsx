import React from "react";
import { setupGetAllHosts } from "../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import NetworkGraph from "./components/network-graph/NetworkGraph";

const Map = () => {
  const dispatch = useDispatch();
  const { hosts, loading } = useSelector((state) => state?.common);

  React.useEffect(() => {
    dispatch(setupGetAllHosts());
  }, [dispatch]);
  return (
    <div>{loading ? <CircularProgress /> : <NetworkGraph hosts={hosts} />}</div>
  );
};

export default Map;
