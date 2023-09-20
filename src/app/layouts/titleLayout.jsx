import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TitleLayout = () => {
  const { pathname } = useLocation();
  const [arrayPath, setArrayPath] = useState([]);

  const pathNames = {
    cmdb: "CMDB",
    srvpcs: "Серверы и ПК",
  };

  useEffect(() => {
    const arrPth = pathname.split("/");
    arrPth.shift();
    setArrayPath(arrPth);
  }, [pathname]);

  return (
    <div className="p-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {arrayPath.map((path) => (
            <li className="breadcrumb-item" key={path}>
              {pathNames[path]}
            </li>
          ))}
        </ol>
      </nav>
      <h4>{pathNames[arrayPath[arrayPath.length - 1]]}</h4>
    </div>
  );
};

export default TitleLayout;
