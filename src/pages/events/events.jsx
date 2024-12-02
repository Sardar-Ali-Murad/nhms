import React from "react";
import { setupGetAllEvents } from "../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Events = () => {
  const dispatch = useDispatch();
  const { events, loading } = useSelector((state) => state?.common);
  console.log(events);

  React.useEffect(() => {
    dispatch(setupGetAllEvents());
  }, [dispatch]);
  return (
    <div>
      {loading ? <CircularProgress /> : <p>Event Page...</p>}
    </div>
  );
};

export default Events;
