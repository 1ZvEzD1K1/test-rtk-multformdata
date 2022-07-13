import React, { useState } from "react";
import { sendUserData } from "../redux/slices/postuser";
import { useDispatch, useSelector } from "react-redux";
import Radio from "./Radio";

const Form = ({ positions }) => {
  const dispatch = useDispatch();

  //const [formdata, setFormdata] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position_id, setPosition_id] = useState('')
  //console.log(position)
  const [dataImg, setDataImg] = useState(null)
  //console.log(dataImg)

  const submitForm = (e) => {
    e.preventDefault()
    // setFormdata({
    //   name,
    //   email,
    //   number,
    //   position,
    //   photo
    // })
    //console.log("after set",formdata)
    
    dispatch(sendUserData({
      name,
      email,
      phone,
      position_id,
      dataImg
    }))
    setName('')
    setEmail('')
    setPhone('')
    setPosition_id('')
    setDataImg(null)
  }

  //console.log(formdata)

  return (
    <form className="form">
      <div className="form__name">
        <input type="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="form__mail">
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="form__number">
        <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <p>+38 (XXX) XXX - XX - XX</p>
      </div>
      <div className="form__radio-container">
        <div className="radio__text">Select your position</div>
        {positions.map((pos)=>{
          return <Radio key={pos.id} posid={pos.id} name={pos.name} position={position_id} setPosition={setPosition_id}/>
        })}
      </div>
      <div className="form__file">
        <label htmlFor="inpfile">Upload</label>
        <div>{dataImg?.name ?? 'Upload your photo'}</div>
        <input id="inpfile" type="file" placeholder="photo" onChange={(e)=>setDataImg(e.target.files[0])} />
      </div>
      <div className="form__buttons">
        <input type="submit" value="Sign up" className="form__button" onClick={submitForm}/>
      </div>
    </form>
  );
};

export default Form;
