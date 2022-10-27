import React, { useEffect, useState } from "react";
import Login from "./Login";

const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/usertbl")
      .then((res) => res.json())
      .then((data) => setUsers(data.Usertbls));
  }, []);
  return (
    <div>
      {users.map(user => 
        <Login key={user.User_ID} user={user}></Login>
      )}
    </div>
  );
};

export default Users;
