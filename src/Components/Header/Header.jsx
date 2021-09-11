import React from "react";
import "./Header.css";

export const Header = ({setLeadToReport}) => {

  const backToMainPage = () => {
    setLeadToReport(false);
  }

  return (
    <nav className="navbar navbar-dark bg-dark peddingNav">
      <div className="container-fluid">
        <h1 className="navbar-brand">Interviews Reports</h1>
        <form className="d-flex">
          <button className="btn btn-light" type="button" onClick={backToMainPage}>
            Candidates
          </button>
        </form>
      </div>
    </nav>
  );
};
