import React, { useState } from "react";
import ShowAnswerContent from "../../components/ShowAnswerContent";
import BrowseMenu from "../../components/BrowseMenu";

const Browse_07_PrimaryDuration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <BrowseMenu />
    <main className='page browse'>
      <div className="browse-page">
        <div className="browse-panel-container">
      <h2 className="browse-content-heading">Duration of care by primary veterinarians for LP/GOLPP symptoms</h2>

      <p className="browse-content-text">This section asks about the duration of Bella&lsquo;s care by primary veterinarians for LP/GOLPP symptoms. This includes any primary veterinarians who saw Bella since the LP/GOLPP symptoms first appeared. It also asks whether you switched primary vets because of how Bella&lsquo;s symptoms were being handled.</p>
      </div>
      </div>
    </main>
    </>
  );
};

export default Browse_07_PrimaryDuration;
