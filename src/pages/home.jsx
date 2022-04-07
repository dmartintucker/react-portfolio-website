import React from "react";

import Image from "../img/writing-analysis-demo.png";

import "./home.css";

export default function Home() {
  return (
    <React.Fragment>
      <main className="masthead">
        <div className="masthead-content">
          <h1>
            You and I share <br /> so much in common.
          </h1>
          <h3>
            We both want to see education improved and made accessible to
            learners everywhere. We envision a future in which every educational
            experience is personalized&#8212;tailored to the unique needs and
            goals of every individual. And we believe that this future isn't
            just achieveable&#8212;it's well within our reach.
          </h3>
          <button>See My Projects</button>
        </div>
        <div className="masthead-img">
          <img className="feature-img" src={Image} />
        </div>
      </main>
      {/* <div className="img-container">
        <img className="feature-img" src={Image} />
      </div> */}
      <section className="section-why"></section>
    </React.Fragment>
  );
}
