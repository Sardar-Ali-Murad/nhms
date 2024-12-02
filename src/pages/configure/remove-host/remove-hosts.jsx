import React from "react";
import { setupGetAllHosts } from "../../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Table from "./components/table";

const RemoveHosts = () => {
  const dispatch = useDispatch();
  const { hosts, loading } = useSelector((state) => state?.common);

  React.useEffect(() => {
    dispatch(setupGetAllHosts());
  }, [dispatch]);
  return (
    <div className="mb-4">
      {loading ? <CircularProgress /> : <Table hosts={hosts} />}
    </div>
  );
};

export default RemoveHosts;
