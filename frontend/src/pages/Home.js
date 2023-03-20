import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../services/users";
import Navigation from "../components/Navigation";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  // Each column definition results in one column.
  const [columnDefs] = useState([
    { field: "userFullName" },
    { field: "userAddress" },
    { field: "userAge" },
    { field: "userPhone" },
    { field: "userEmail" },
    { field: "userMedHistory" },
  ]);

  // get all users' info when the page loads
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      setUsers(response.data);
    };
    fetchData();
  }, []);

  // check for authenticated user when the page loads
  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem("loggedInUser");
    if (loggedUserJson) {
      const userInfo = JSON.parse(loggedUserJson);
      setUser(userInfo.user);
    }
  }, []);

  // click event handler for rows
  const cellClickedListener = (event) => {
    if (user) {
      navigate("/update", { state: { user: event.data } });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Navigation />
      {/* Conditional rendering for admin and normal user */}
      {!user ? (
        <h6 style={{ textAlign: "center" }}>Log in to edit records</h6>
      ) : (
        <>
          <h3 style={{ textAlign: "center" }}>Welcome Admin</h3>
          <h6 style={{ textAlign: "center" }}>Click a row to edit it</h6>
        </>
      )}
      <div className="container-lg">
        <div className="ag-theme-alpine" style={{ height: 400 }}>
          <AgGridReact
            onCellClicked={cellClickedListener}
            rowData={users}
            columnDefs={columnDefs}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
