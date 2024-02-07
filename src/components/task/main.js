import React from "react";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6";


const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="content1 ">
            <Content1 />
          </div>
          <div className="content2 ">
            <Content2 />
          </div>
          <div className="content3 ">
            <Content3 />
          </div>

          <div className="content4 ">
            <Content4 />
          </div>
          <div className="content5">
            <Content5 />
          </div>
          <div className="content6">
            <Content6 />
          </div>

         
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;