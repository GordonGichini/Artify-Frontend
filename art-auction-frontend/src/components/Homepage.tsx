import React from "react";
import Header from "./common/Header";
import SearchCard from "./common/SearchCard";
import ArtCarousel from "./common/ArtCarousel";

const Homepage: React.FC = () => {
    return (
      <div>
     <div> Home Page</div>
     <Header />
      <SearchCard />
      <ArtCarousel />
      <ArtCarousel />
      <ArtCarousel />
    </div>
    );
  }

  export default Homepage;