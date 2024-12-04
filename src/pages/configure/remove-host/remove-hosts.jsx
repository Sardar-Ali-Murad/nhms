import React from "react";
import { setupGetAllHosts } from "../../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Table from "./components/table";
import AddHostDialog from "./components/add-host-dialog";

const RemoveHosts = () => {
  const dispatch = useDispatch();
  const { hosts, loading } = useSelector((state) => state?.common);
  const [addHostDialog, setAddHostDialog] = React.useState(false);

  React.useEffect(() => {
    dispatch(setupGetAllHosts());
  }, [dispatch]);
  return (
    <div className="mb-4">
      {addHostDialog && (
        <div className="model-parent">
          <div className="model-wrap">
            <AddHostDialog setAddHostDialog={setAddHostDialog} />
          </div>
        </div>
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <div className="d-flex justify-content-between mb-4 container">
            <button
              className="btn btn-primary"
              onClick={() => setAddHostDialog(true)}
            >
              Add Host
            </button>
            <button className="btn btn-primary">Add Connector</button>
          </div>
          <Table hosts={hosts} />
        </div>
      )}
    </div>
  );
};

export default RemoveHosts;
