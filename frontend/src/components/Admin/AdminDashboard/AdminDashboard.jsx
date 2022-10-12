import React from "react";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "./AdminDashboard.css";
const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboardMainContainer">
        <div className="dashboardLinkContainer">
          <div>
            <h1 className="text-center ">ABOUT</h1>
            <div
              onClick={() => navigate("/admin/dashboard/addabout")}
              className="cursor-pointer"
            >
              Add About
            </div>
            <div
              onClick={() => navigate("/admin/dashboard/allabout")}
              className="cursor-pointer"
            >
              All About
            </div>
          </div>
          <div style={{ border: "5px solid black" }}></div>

          <div>
            <h1 className="text-center ">ADMIN</h1>
            <div
              onClick={() => navigate("/admin/dashboard/addadmin")}
              className="cursor-pointer"
            >
              Add Admin
            </div>
            <div
              onClick={() => navigate("/admin/dashboard/alladmin")}
              className="cursor-pointer"
            >
              All Admin
            </div>
          </div>
          <div style={{ border: "5px solid black" }}></div>

          <div className="text-red-700">
            <h1 className="text-center ">Projects</h1>
            <div
              onClick={() => navigate("/admin/dashboard/addproject")}
              className="cursor-pointer"
            >
              Add ProjectDetail
            </div>
            <div
              onClick={() => navigate("/admin/dashboard/allproject")}
              className="cursor-pointer"
            >
              All Projects
            </div>
          </div>
          <div style={{ border: "5px solid black" }}></div>
          <div>
            <h1 className="text-center ">What I Do</h1>
            <hr />
       
            <div
              onClick={() => navigate("/admin/dashboard/addwhatido")}
              className="cursor-pointer"
            >
              Add What i do
            </div>

            <div
              onClick={() => navigate("/admin/dashboard/allwhatido")}
              className="cursor-pointer"
            >
              All What i DO
            </div>
          </div>
          <div style={{ border: "5px solid black" }}></div>
        
          <div>
            <h1 className="text-center ">Contact</h1>

            <div
              onClick={() => navigate("/admin/dashboard/addcontact")}
              className="cursor-pointer"
            >
              Add Contact
            </div>
            <div
              onClick={() => navigate("/admin/dashboard/allcontact")}
              className="cursor-pointer"
            >
              All Contact
            </div>
          </div>
        </div>
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
