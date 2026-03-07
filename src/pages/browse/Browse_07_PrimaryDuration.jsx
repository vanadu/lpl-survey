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
        <div className="browse-panel-container"></div>

      <h2 className="browse-content-heading">Duration of care by primary veterinarians for LP/GOLPP symptoms</h2>

      <p className="browse-content-text">This section asks about the duration of &#123;CmpnName&#125;&lsquo;s care by primary veterinarians for LP/GOLPP symptoms. This includes any primary veterinarians who saw &#123;CmpnName&#125; since the LP/GOLPP symptoms first appeared. It also asks whether you switched primary vets because of how &#123;CmpnName&#125;&lsquo;s symptoms were being handled.</p>

      <div className="browse-panel-container">
        <h3 className="browse-showanswer-title">About how old was &#123;CmpnName&#125; when you first consulted with a primary veterinarian about LP/GOLPP symptoms?</h3>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Age in years (number):"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Months (number 0 - 11)"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <div className="browse-showanswer-input" aria-hidden="true"></div>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="About how many times did a primary veterinarian see {CmpnName} about LP/GOLPP symptoms?"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Twice</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than twice</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="About what was the total pre-insurance cost of these visits to primary veterinarians about {CmpnName}'s LP/GOLPP symptoms?"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Under $200</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$200-$500</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>$500-$1000</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Over $1000</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Don&lsquo;t know or prefer not to say</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Did you ever change primary veterinarians because how they handled {CmpnName}'s LP/GOLPP symptoms?"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>No</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>Once</span>
            </li>
            <li className="browse-showanswer-radio">
              <span className="browse-showanswer-icon browse-showanswer-icon--radio" aria-hidden="true"></span>
              <span>More than once</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>

      <div className="browse-question-container">
        <ShowAnswerContent
          title="Why did you change veterinarians after {CmpnName} started showing symptoms of LP/GOLPP?"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <div className="showanswer__content-block">
          <ul>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>The previous vet said nothing could be done about &#123;CmpnName&#125;&lsquo;s symptoms.</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>The previous vet couldn&lsquo;t give possible causes for &#123;CmpnName&#125;&lsquo;s symptoms.</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>The previous vet said &#123;CmpnName&#125;&lsquo;s symptoms were just due to age.</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>The previous vet ordered tests that I didn&lsquo;t think were relevant.</span>
            </li>
            <li className="browse-showanswer-checkbox">
              <span className="browse-showanswer-icon browse-showanswer-icon--checkbox" aria-hidden="true"></span>
              <span>The previous vet misdiagnosed &#123;CmpnName&#125;&lsquo;s symptoms.</span>
            </li>
          </ul>
          </div>
        </ShowAnswerContent>
      </div>
      </div>
    </main>
    </>
  );
};

export default Browse_07_PrimaryDuration;
