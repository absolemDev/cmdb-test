import React from "react";
import Table from "../common/table";
import Type from "../ui/type";
import Tags from "../ui/tags";
import { useOutletContext } from "react-router-dom";

const ServersAndPCsPage = () => {
  const [entitiesCrop] = useOutletContext();

  const columns = {
    name: {
      name: "Название",
    },
    type: {
      name: "Тип",
      component: (item) => <Type id={item.type} />,
    },
    location: {
      name: "Расположение",
    },
    orgUnit: {
      name: "Орг.единица",
    },
    invNumber: {
      name: "Инв.номер",
    },
    tags: {
      name: "Теги",
      component: (item) => <Tags tags={item.tags} />,
    },
    dateCreation: {
      name: "Дата создания",
    },
    dateUpdate: {
      name: "Дата обновления",
    },
    dateAudit: {
      name: "Дата аудита",
    },
  };

  return (
    <div>
      <Table columns={columns} data={entitiesCrop} />
    </div>
  );
};

export default ServersAndPCsPage;
