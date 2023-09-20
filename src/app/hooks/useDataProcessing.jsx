import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getSrvPCs } from "../store/srvPCs";
import { useSearchParams } from "react-router-dom";
import { getTypes } from "../store/types";
import { getTags } from "../store/tags";

const DataProcessingContext = React.createContext();

export const useDataProcessing = () => {
  return useContext(DataProcessingContext);
};

const DataProcessingProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [filter, setFilter] = useState({
    srvpcs_type: queryParams.get("srvpcs_type") || "",
    tag: queryParams.get("tag") || "",
  });
  const [search, setSearch] = useState(queryParams.get("search_val") || "");
  const [currentPage, setCurrentPage] = useState(
    Number(queryParams.get("page")) || 1
  );
  const [pageSize, setPageSize] = useState(10);

  const srvPCs = useSelector(getSrvPCs());
  const types = useSelector(getTypes());
  const tags = useSelector(getTags());

  useEffect(() => {
    setQueryParams({ ...filter, search_val: search, page: currentPage });
  }, [search, currentPage, filter, setQueryParams]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleFilter = (data) => {
    setFilter(data);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleChangePageSize = (value) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const getTypeId = (name) => types.find((item) => item.name === name)?._id;
  const getTagId = (name) => tags.find((item) => item.name === name)?._id;
  const getTypeName = (id) => types.find((item) => item._id === id).name;
  const getTagsByIDs = (ids) => tags.filter((tag) => ids.includes(tag._id));

  const getEntities = () => {
    const searchedEntities = search
      ? srvPCs.filter((item) =>
          new RegExp(search).test(item.name.toLowerCase())
        )
      : srvPCs;
    return searchedEntities.filter((item) =>
      Object.entries(filter).every(([key, value]) => {
        if (value) {
          switch (key) {
            case "srvpcs_type":
              return item.type === getTypeId(value);
            case "tag":
              return item.tags.includes(getTagId(value));
            default:
              return true;
          }
        }
        return true;
      })
    );
  };

  return (
    <DataProcessingContext.Provider
      value={{
        getEntities,
        filter,
        search,
        handleFilter,
        handleSearch,
        currentPage,
        handlePageChange,
        pageSize,
        handleChangePageSize,
        types,
        tags,
        getTypeName,
        getTagsByIDs,
      }}
    >
      {children}
    </DataProcessingContext.Provider>
  );
};

DataProcessingProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DataProcessingProvider;
