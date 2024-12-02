import React from "react";
import { setupGetAllHosts } from "../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Map = () => {
  const dispatch = useDispatch();
  const { hosts, loading } = useSelector((state) => state?.common);
  console.log(hosts);

  React.useEffect(() => {
    dispatch(setupGetAllHosts());
  }, [dispatch]);
  return (
    <div>
      {loading ? <CircularProgress /> : <p>Map Page...</p>}
    </div>
  );
};

export default Map;
