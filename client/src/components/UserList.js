import React, { useEffect, useState } from "react";
import User from "./User";
import { getUserVideos } from "../modules/videoManager";

const UserList = () => {
    
  const [users, setUser] = useState([]);
  
  const getUser = () => {
    getUserVideos().then(users => setUser(users));
  };

  useEffect(() => {
    getUser()
  }, []);

  return (
    <div className="container">
        <div className="row justify-content-center">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
