import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { public_api_test } from "../../Services/http.service";
import Loading from "./Loading";

const User_info = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // public_api.get('/users')

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      try {
        const { data } = await public_api_test.get("/users"); // user api end point eg. https://jsonplaceholder.typicode.com/users
        setUsers(data); //on success!
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.message); //error
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <table className="table-auto mx-28 mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Loading />
          ) : (
            users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User_info;
