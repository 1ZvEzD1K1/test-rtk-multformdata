import React from "react";

const Success = () => {
  return (
    <div className="success">
      <div className="success__container _container">
        <div className="success__title global_title">
          User successfully registered
        </div>
        <div className="success__img">
          <img src={require("../img/success-image.png")} alt="seccess" />
        </div>
      </div>
    </div>
  );
};

export default Success;
