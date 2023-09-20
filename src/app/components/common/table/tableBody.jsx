import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    return columns[column].component
      ? columns[column].component(item)
      : item[column];
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableBody;
