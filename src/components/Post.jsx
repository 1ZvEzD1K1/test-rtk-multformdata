import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosition } from "../redux/slices/positions";
import Form from "./Form";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosition());
  }, []);

  const { loading, error, positions } = useSelector((state) => state.positions);

  return (
    <section className="main__post post">
      <div className="post__container _container">
        <div className="post__title global_title">
          Working with POST request
        </div>
        <div className="post__form">
          <Form positions={positions}/>
        </div>
      </div>
    </section>
  );
};

export default Post;
