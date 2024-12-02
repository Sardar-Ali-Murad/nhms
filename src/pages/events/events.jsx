import React from "react";
import { setupGetAllEvents } from "../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Table from "./components/table";

const Events = () => {
  const dispatch = useDispatch();
  const { events, loading } = useSelector((state) => state?.common);

  React.useEffect(() => {
    dispatch(setupGetAllEvents());
  }, [dispatch]);
  return (
    <div className="mb-4">
      {loading ? <CircularProgress /> : <Table events={events} />}
    </div>
  );
};

export default Events;
