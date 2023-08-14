import React from "react";
import Cohort from "./Cohort";

function SideNavBar({ students, handleClick }) {
  return (
    <>
      <aside>
        <nav>
          <a href="#">
            <h2>All Students</h2>
          </a>
          <hr />
          <Cohort students={students} />
        </nav>
      </aside>
    </>
  );
}

export default SideNavBar;
