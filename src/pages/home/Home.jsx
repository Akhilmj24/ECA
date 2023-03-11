import React, { useEffect } from "react";
// import { getUsers } from "../../redux/features/userSilce/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch(getUsers());
  }, []);
  return (
    <div>
      {/* Home
      {user.loading && <div>Loagfgding</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.user.length ? (
        <div>
          {user.user?.map((user) => (
            <div>
              <h1>{user.title}</h1>
            </div>
          ))}
        </div>
      ) : null} */}
     Home

    </div>
  );
}
