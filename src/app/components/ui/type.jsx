import React from "react";
import { useDataProcessing } from "../../hooks/useDataProcessing";
import PropTypes from "prop-types";

const Type = ({ id }) => {
  const { getTypeName } = useDataProcessing();
  const type = id ? getTypeName(id) : "";

  return <>{type}</>;
};

Type.propTypes = {
  id: PropTypes.string,
};

export default Type;
