import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/users";
import Loader from "./Loader";
import Error from "./Error";
import Card from "./Card";

const Get = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { loading, error, users, page, total_pages } = useSelector((state) => state.users);
  //console.log(users);
  //console.log(page)

  if (loading == "loading") {
    return <Loader />;
  }

  if (error == "rejected") {
    return <Error error={error} />;
  }

  return (
    <section className="main__get get">
      <div className="get__container _container">
        <div className="get__title global_title">Working with GET request</div>
        <div className="get__cards card">
          {users &&
            users.map((user) => (
              <Card
                key={user.id}
                name={user.name}
                email={user.email}
                photo={user.photo}
                pos={user.position}
                phone={user.phone}
              />
            ))}
        </div>
        <div className="get__buttons">
          <input
            type="button"
            className="get__button"
            value="Show more"
            onClick={() => dispatch(getUsers())}
            disabled={page == total_pages}
          />
        </div>
      </div>
    </section>
  );
};

export default Get;
