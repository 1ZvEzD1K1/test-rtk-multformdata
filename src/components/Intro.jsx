import React from "react";

const Intro = () => {
  return (
    <section className="main__intro intro">
      <div className="intro__container _container">
        <div className="intro__title">Test assignment for front-end developer</div>
        <div className="intro__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </div>
        <div className="intro__buttons">
          <input type="button" className="intro__button" value="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
