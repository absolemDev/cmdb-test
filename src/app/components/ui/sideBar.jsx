import React from "react";

const SideBar = () => {
  return (
    <div
      className="flex-shrink-0 p-2 bg-secondary-subtle"
      style={{ width: "280px" }}
    >
      <span className="fs-5 fw-semibold">U-SYSTEM</span>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">Дашборд</li>
        <li className="mb-1">
          <span>CMDB</span>
          <ul className="list-unstyled fw-normal ps-2">
            <li>Серверы и ПК</li>
            <li>Гипервизоры и вирт. машины</li>
            <li>Принтеры и МФУ</li>
            <li>Сетевые устройства</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
