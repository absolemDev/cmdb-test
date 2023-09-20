import React from "react";
import PropTypes from "prop-types";

const PageSize = ({ pageSize, onChange }) => {
  const handleChange = ({ target }) => {
    onChange(Number(target.value));
  };

  return (
    <div className="row g-3 align-items-center ms-auto">
      <div className="col-auto">
        <label htmlFor="page-size" className="col-form-label">
          Количество записей:
        </label>
      </div>
      <div className="col-auto">
        <select
          id="page-size"
          className="form-select"
          onChange={handleChange}
          value={pageSize}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

PageSize.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageSize;
