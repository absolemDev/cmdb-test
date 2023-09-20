import React from "react";
import Tag from "./tag";
import { useDataProcessing } from "../../hooks/useDataProcessing";
import PropTypes from "prop-types";

const Tags = ({ tags }) => {
  const { getTagsByIDs } = useDataProcessing();
  const tagList = getTagsByIDs(tags);

  return (
    <>
      {tagList.map((tag) => (
        <Tag key={tag._id} {...tag} />
      ))}
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Tags;
