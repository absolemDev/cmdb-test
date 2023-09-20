import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import SideBar from "./components/ui/sideBar";
import ProfilePanel from "./components/ui/profilePanel";

function App() {
  const elements = useRoutes(routes());

  return (
    <div className="App d-flex align-items-stretch">
      <SideBar />
      <div className="flex-grow-1 p-2">
        <ProfilePanel />
        {elements}
      </div>
    </div>
  );
}

export default App;
