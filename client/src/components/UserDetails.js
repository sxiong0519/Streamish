import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "./User";
import { getUserById } from "../modules/videoManager";

const UserDetails = () => {
    const [user, setUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then(setUser);
    }, []);

    if (!user) {
        return null;
    }

    return (
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <User user={user} />
        </div>
      </div>
    </div>
    );
};

export default UserDetails;