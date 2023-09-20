import React from "react";
import { Outlet } from "react-router-dom";
import withDataProcessing from "../components/ui/hoc/withDataProcessing";
import Pagination from "../components/common/pagination";
import { useDataProcessing } from "../hooks/useDataProcessing";
import { paginate } from "../utils/paginate";
import SearchPanel from "../components/ui/searchPanel";
import PageSize from "../components/ui/pageSize";
import TitleLayout from "./titleLayout";

const CMDBLayout = () => {
  const {
    getEntities,
    currentPage,
    handlePageChange,
    pageSize,
    handleChangePageSize,
  } = useDataProcessing();

  const entities = getEntities();
  const entitiesCount = entities.length;
  const entitiesCrop = paginate(entities, currentPage, pageSize);

  return (
    <div>
      <TitleLayout />
      <SearchPanel
        itemsCount={entitiesCount}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Outlet context={[entitiesCrop]} />
      <div className="d-flex">
        <Pagination
          currentPage={currentPage}
          itemsCount={entitiesCount}
          onPageChange={handlePageChange}
          pageSize={pageSize}
        />
        <PageSize pageSize={pageSize} onChange={handleChangePageSize} />
      </div>
    </div>
  );
};

const CMDBLayoutWhithDataProcessing = withDataProcessing(CMDBLayout);

export default CMDBLayoutWhithDataProcessing;
