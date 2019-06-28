import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="row center">
            <div className="video-container">
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/k9zTr2MAFRg"
                frameborder="0"
                allowfullscreen
                title="agogesystem"
              />
            </div>
            <h5 className="header col s12 light">
              Your Calisthenics Journey Starts Here
            </h5>
          </div>
          <div className="row center">
            <a
              href="https://tattp://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light orange"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <blockquote>
        A lot of [newbies and enthusiasts] fail their fitness journey. Why?
        Simple. They don't know where and how to start. There are a lot of
        "gurus" out there shouting different strategies and it's overwhelming to
        even know where to start. With Agoge System, You'll go through a 14-Week
        Program that cuts through the noise and provides you a step by step
        roadmap with all the support you need to finally achieve the results you
        want. (Obviously, you have to do the work).
      </blockquote>
      {/* section */}
      <div className="section">
        <div className="row">
          <h5 className="header col s12 l12 center">
            What clients say about us
          </h5>
          {/* first card */}
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image">
                <img alt="img" src="images/sample-1.jpg" />
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati provident deserunt, pariatur eius minima quisquam
                  dolorem maiores cumque fugiat perferendis. Totam dolorem
                  deserunt officia perferendis tenetur, placeat odit ab
                  pariatur.
                </p>
              </div>
              <div className="card-action">
                <a href="https://takatoshiwada">link to his blog</a>
              </div>
            </div>
          </div>
          {/* second card */}
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image">
                <img alt="img" src="images/sample-1.jpg" />
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae non eos magnam sunt laborum pariatur saepe maiores
                  eveniet libero culpa consequuntur, itaque aut nisi fugit
                  aspernatur sit! Modi, in aliquam?
                </p>
              </div>
              <div className="card-action">
                <a href="https://takatoshiwada">link to his blog</a>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image">
                <img alt="img" src="images/sample-1.jpg" />
              </div>
              <div className="card-content">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta tenetur nemo impedit optio corporis temporibus illo
                  quidem blanditiis provident eaque! Nostrum debitis cumque
                  laudantium odio saepe quae assumenda fugiat quo.
                </p>
              </div>
              <div className="card-action">
                <a href="https://takatoshiwada">link to his blog</a>
              </div>
            </div>
          </div>
        </div>
        {/* end of section */}
        {/* about us */}
        <div className="section">
          <div className="row">
            <h5 className="header col s12 l12 center">About Us</h5>
          </div>
        </div>
        {/* end of about us */}
      </div>
    </div>
  );
};

export default Landing;