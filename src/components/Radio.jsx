import React from "react";

const Radio = ({ posid, name, position, setPosition }) => {
  return (
    <div className="form__radio">
      <input id={`radio-${posid}`} type="radio" value={posid} checked={position==posid} onChange={(e)=>setPosition(e.target.defaultValue)}/>
      <label htmlFor={`radio-${posid}`}>{name}</label>
    </div>
  );
};

export default Radio;
