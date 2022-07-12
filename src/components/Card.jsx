import React from "react";

const Card = ({name, email, photo, pos, phone}) => {
  return (
    <div className="card__wrap">
      <div className="card__container">
        <div className="card__avatar">
          <img src={photo} alt="avatar" />
        </div>
        <div className="card__name">{name}</div>
        <div className="card__desc">
          {pos} {email} {phone}
        </div>
      </div>
    </div>
  );
};

export default Card;
