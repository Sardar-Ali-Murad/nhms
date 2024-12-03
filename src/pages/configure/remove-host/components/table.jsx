import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import moment from "moment";

const Table = ({ hosts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 15;

  const totalPages = Math.ceil(hosts.length / itemsPerPage);

  const currentHosts = hosts.slice(
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
                    <th className="sr-col">Host Id</th>
                    <th>Name</th>
                    <th>DB Name</th>
                    <th>IP Address</th>
                    <th>Key Code</th>
                    <th>Time Zone</th>
                    <th>pk</th>
                    <th>Expire Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentHosts.map((row, index) => (
                    <tr key={index}>
                      <td>{row?.hostid}</td>
                      <td>{row.name}</td>
                      <td>{row.dbname}</td>
                      <td>{row.ipaddress}</td>
                      <td>{row.keycode}</td>
                      <td>{row.timezone}</td>
                      <td>{row.pk}</td>
                      <td>{row.expiredate}</td>
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
