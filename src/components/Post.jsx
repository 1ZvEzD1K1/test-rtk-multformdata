import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosition } from "../redux/slices/positions";
import Error from "./Error";
import Form from "./Form";
import Loader from "./Loader";
import Success from "./Success";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosition());
  }, []);

  const { positions } = useSelector((state) => state.positions);
  const { error, loading, success } = useSelector((state) => state.postuser);

  if (loading == "rejected") {
    return <Error error={error} />;
  }

  if (loading == "pending") {
    return <Loader />;
  }

  console.log(success)

  return !success ? (
    <section className="main__post post">
      <div className="post__container _container">
        <div className="post__title global_title" id="postTitle">
          Working with POST request
        </div>
        <div className="post__form">
          <Form positions={positions} />
        </div>
      </div>
    </section>
  ) : (
    <Success/>
  );
};

export default Post;
