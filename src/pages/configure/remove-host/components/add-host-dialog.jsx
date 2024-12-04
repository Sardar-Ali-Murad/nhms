import React from "react";

const AddHostDialog = ({ setAddHostDialog }) => {
  return (
    <div className="px-4 py-4">
      <h2 className="pb-4 heading">Add Host</h2>

      <div className="row mb-2">
        <div className="col-lg-2 label-text">Host IP :</div>
        <div className="col-lg-8">
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-control"
            placeholder="28"
          ></input>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-2 label-text">Host Name :</div>
        <div className="col-lg-8">
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-control"
            placeholder="local"
          ></input>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-2 label-text">Description</div>
        <div className="col-lg-8">
          <div className="form-group">
            <textarea
              type="text"
              id="fname"
              className="form-control h-400"
              name="fname"
              placeholder="Add detail here"
              required="required"
              maxLength="2000"
            ></textarea>
            <label className="word-limit-info label-text">
              Maximum 2000 characters
            </label>
          </div>
        </div>
      </div>
      <div className="text-end">
        <button
          className="btn btn-danger"
          onClick={() => setAddHostDialog(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddHostDialog;
