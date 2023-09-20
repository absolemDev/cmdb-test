import React, { useState } from "react";
import { useDataProcessing } from "../../hooks/useDataProcessing";
import FilterForm from "./filterForm";
import PropTypes from "prop-types";

const SearchPanel = ({ itemsCount, currentPage, pageSize }) => {
  const { search, handleSearch, filter, handleFilter } = useDataProcessing();

  const [formIsOpen, setFormIsOpen] = useState(false);

  const handleToggleForm = () => {
    setFormIsOpen((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    handleSearch(target.value.toLowerCase());
  };

  return (
    <div className="d-flex">
      <div className="flex-grow-1 w-100 lh-lg">
        {`Записи ${(currentPage - 1) * pageSize + 1} - ${
          currentPage * pageSize > itemsCount
            ? itemsCount
            : currentPage * pageSize
        } из ${itemsCount}`}
      </div>
      <div className="input-group position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Поиск"
          value={search}
          onChange={handleChange}
        />
        <button
          className="btn btn-light"
          type="button"
          onClick={handleToggleForm}
        >
          Фильтр
        </button>
        {formIsOpen && (
          <FilterForm
            initialData={filter}
            onToggleForm={handleToggleForm}
            onFilter={handleFilter}
          />
        )}
      </div>
    </div>
  );
};

SearchPanel.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default SearchPanel;
