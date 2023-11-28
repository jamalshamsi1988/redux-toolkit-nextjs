"use client";
import { fetchUsers } from "@/redux-toolkit/features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);
  return (
    <div>
        <h1>Users</h1>
      {users.loading ? <h>Loading...</h> : null}
      {users.users.length
        ? users.users.map((user) => <p key={user.id}>{user.name}</p>)
        : null}
    </div>
  );
};

export default UsersPage;
