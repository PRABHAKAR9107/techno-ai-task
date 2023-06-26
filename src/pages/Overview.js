import React from "react";
import InternDataTable from "../components/React-table/InternDataTable";
const Overview = () => {
  return (
    <>
      <div className="home">
        {/* <button style={{ padding: "10px" }}>Import Contact</button> */}
      </div>
      <div className="showTable" style={{ position: "absolute", left: "25%" }}>
        <InternDataTable />
      </div>
    </>
  );
};

export default Overview;
