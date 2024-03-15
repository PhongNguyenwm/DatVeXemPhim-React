import React from "react";
import Header from "../layout/Header/Header";
import Banner from "../layout/Banner/Banner";
import ListMovie from "../layout/ListMovie/ListMovie";

const HomePage = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* list movie */}
      <div className="container">
        <ListMovie />
      </div>
      {/* footer */}
    </div>
  );
};

export default HomePage;
