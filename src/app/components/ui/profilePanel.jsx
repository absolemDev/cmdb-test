import React from "react";

const ProfilePanel = () => {
  return (
    <div className="d-flex border-bottom mb-2">
      <div className="ms-auto p-2">
        <i className="bi bi-gear"></i>
      </div>
      <div className="vr"></div>
      <div className="dropdown">
        <div className="btn dropdown-toggle d-flex align-items-center">
          <div className="me-2">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
