import React from "react";

import Image from "../img/writing-analysis-demo.png";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <h1>
          You and I share <br /> so much in common.
        </h1>
        <p>
          We both want to see education improved and made accessible to learners
          everywhere. We envision a future in which every educational experience
          is personalized -- tailored to the unique needs and goals of every
          individual. And we believe that this future isn't just achieveable --
          it's well within our reach.
        </p>
      </main>
      <div className="img-container">
        <img className="feature-img" src={Image} />
      </div>
      <section className="section-why"></section>
    </React.Fragment>
  );
}
