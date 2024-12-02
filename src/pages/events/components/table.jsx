import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import moment from "moment";

const Table = ({ events }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const currentEvents = events.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table w-100 table-bordered table-hover rounded equal-columns">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="sr-col">Event Id</th>
                    <th>Group</th>
                    <th>Host Id</th>
                    <th>Ip Id</th>
                    <th>Mac Id</th>
                    <th>Type</th>
                    <th>Utc Time</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEvents.map((row, index) => (
                    <tr key={index}>
                      <td>{row?.eventid}</td>
                      <td>{row.group}</td>
                      <td>{row.hostid}</td>
                      <td>{row.ipid}</td>
                      <td>{row.macid}</td>
                      <td>{row.type}</td>
                      <td>
                        {moment(row.utctime).format("YYYY-MM-DD HH:mm:ss")}
                      </td>
                      <td>
                        <textarea
                          className="form-control h-70"
                          placeholder="Enter Reason"
                          maxLength={1500}
                          value={row.description}
                          disabled
                          readOnly
                        ></textarea>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
