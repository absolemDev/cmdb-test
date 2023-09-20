import React, { useState } from "react";
import { useDataProcessing } from "../../hooks/useDataProcessing";
import PropTypes from "prop-types";

const FilterForm = ({ initialData, onToggleForm, onFilter }) => {
  const [data, setData] = useState(initialData);

  const { types, tags } = useDataProcessing();

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleCancel = () => {
    onFilter({ srvpcs_type: "", tag: "" });
    onToggleForm();
  };

  const handleFilter = () => {
    onFilter(data);
    onToggleForm();
  };

  return (
    <form className="position-absolute bg-body p-3 shadow top-100 end-0">
      <h4>Фильтры</h4>
      <label htmlFor="filter-type" className="form-label">
        Тип ПК
      </label>
      <select
        id="filter-type"
        className="form-select mb-2"
        value={data.srvpcs_type}
        name="srvpcs_type"
        onChange={handleChange}
        placeholder="Выбрать"
      >
        <option disabled value="">
          Выбрать
        </option>
        {types.map(({ _id, name }) => (
          <option key={_id} value={name}>
            {name}
          </option>
        ))}
      </select>
      <label htmlFor="filter-tag" className="form-label">
        Теги
      </label>
      <select
        id="filter-tag"
        className="form-select"
        value={data.tag}
        name="tag"
        onChange={handleChange}
        placeholder="Выбрать"
      >
        <option disabled value="">
          Выбрать
        </option>
        {tags.map(({ _id, name, color }) => (
          <option key={_id} className={`text-${color}`} value={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
        <button
          className="btn btn-primary me-md-2"
          type="button"
          onClick={handleFilter}
        >
          Применить
        </button>
        <button className="btn btn-light" type="button" onClick={handleCancel}>
          Сбросить
        </button>
      </div>
    </form>
  );
};

FilterForm.propTypes = {
  initialData: PropTypes.object.isRequired,
  onToggleForm: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default FilterForm;
